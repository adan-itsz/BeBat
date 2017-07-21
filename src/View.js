import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './promoActiva.css';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import { ref } from './constants.js'
import * as firebase from 'firebase'
import GoogleLogin from 'react-google-login';
import FacebookProvider, { Login } from 'react-facebook';

import { Button } from 'react-bootstrap';
import GoArrowRight from 'react-icons/lib/go/arrow-right';
import GoArrowLeft from 'react-icons/lib/go/arrow-left';
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import Facebook from 'react-icons/lib/fa/facebook-official'
import Google from 'react-icons/lib/fa/google'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


import './View.css'

class View extends Component {

    render() {
      return(
        <Router>
      <div>
        <Route path="/View/:id" component={Child}/>
      </div>
    </Router>
      )
    }
}

var arreglo=[];

const styleImg = {
  width: '100%',
  height: '100%',
  maxHeight: '100%',
  margin: '0',
  padding: '0',
  border: '0',
}

const arrows = {
  height: '100%',
  fontSize: '2em'
};

const socialIcon ={
  fontSize:'1.8em',
  paddingBottom:'0%',
}

const socialButtonFacebook = {
  borderRadius:'0px',
  width:'95%',
  backgroundColor:'#337ab7',
  color: 'white',
  marginBottom:'2%',
  paddingTop: '2%',
  paddingBottom: '2%',
}

const socialButtonGoogle = {
  borderRadius:'0px',
  width:'95%',
  backgroundColor:'rgb(209, 72, 54)',
  marginBottom: '2%',
  color:'white',
  fontWeight:'none',
  border:'none'
}

const styleCarousel = {
  height:'100%',
  backgroundColor: 'none'
}
 const googleLoginComponent = {
  backgroundColor:'rgb(209, 72, 54)',
  marginBottom: '1.9%',
  fontWeight:'none',
  border:'none',
  fontSize: '130%',
  marginLeft: '0%',
  marginTop: '1.9%',
  color:'white'
 }

 const styleArrowDown = {
  color:'white',
  marginRight: '7%',
 }

class Child extends Component {
  constructor({match}){
    super()
      this.state={
        arrayActual:["https://firebasestorage.googleapis.com/v0/b/bebat-d9540.appspot.com/o/imagenes-administrador%2FIMG_3405.jpg?alt=media&token=0c6b6585-96d6-4c56-a6c8-628483678623"],
        user:`${match.params.id}`,
        count:0,
        diaCount:0,
        mesCount:0,
        anoCount:0

      }

    }

      componentWillMount(){
        var date = new Date();



        var referenciaContador=ref.child(`${this.state.user}`+"/views");
        var referenciaContadorDia=ref.child(`${this.state.user}`+"/visitasDia");
        var referenciaContadorMes=ref.child(`${this.state.user}`+"/visitasMes");
        var referenciaContadorAno=ref.child(`${this.state.user}`+"/visitasAno");




        var valor=0;
        var dia=0;
        var mes=0;
        var ano=0;
         referenciaContador.on('value',snapshot=>{
          valor=snapshot.val().visitas;
          dia=snapshot.val().dia;
          mes=snapshot.val().mes;
          ano=snapshot.val().ano;


          var valorNumerico=parseInt(valor+1);

          if(valor==null){
            valor=0;
          }
          if(dia==null){
            dia=date.getDate();
            mes=date.getMonth()+1;
            ano=date.getFullYear();
          }


          this.setState({
            count:valorNumerico,
            diaCount:dia,
            mesCount:mes,
            anoCount:ano
          });
        });




      var recibirArray;
    var refDB=ref.child(this.state.user+"/SlideActual");
    refDB.on('value', snapshot=> {
      recibirArray=snapshot.val().slideActual;
    var StringN="";
    var ArrayFg=[];
    for (var i = 0; i < recibirArray.length; i++) {
        if(recibirArray[i] =='~'){
          for (var j = i+1; j < recibirArray.length; j++) {
            if(recibirArray[j]!='~'){
              StringN += recibirArray.substring(j,j+1);
            }
            else if (recibirArray[j]=='~'&&j!=0||recibirArray[j+1]===null&&j!=0) {
              ArrayFg.push(StringN);
              StringN="";
            }
          }
        }
      }

      if(dia==0){   //por el metodo asyncrono la primera vez no guarda el valor en los states asi que hacemos set, fuera del metodo asyncrono
      referenciaContador.set({
     visitas:1,
        dia:date.getDate(),
        mes:date.getMonth()+1,
        ano:date.getFullYear()
      });
    }
      else{ //en caso de que no sea 0 se hace un set normal, con el valor de los states
        referenciaContador.set({
       visitas:this.state.count,//este set es el de las visitas de cada dia
          dia:this.state.diaCount,
          mes:this.state.mesCount,
          ano:this.state.anoCount
        });

      }

      if(this.state.diaCount!=date.getDate()){// comprobamos si la fecha de la DB es diferente a la actual? si lo es significa que tiene que hacer push y guardar lo que tiene view
        var HistorialCountDia=referenciaContadorDia.push();
        HistorialCountDia.set({
          visitasDia:this.state.count,
          dia:this.state.diaCount,
          mes:this.state.mesCount,
          ano:this.state.anoCount
        });

        referenciaContador.set({//inicializamos view con nuevos valores, vistas en 0 y fecha del nuevo dia
       visitas:1,
          dia:date.getDate(),
          mes:date.getMonth()+1,
          ano:date.getFullYear()
        });

      }

    this.setState({
      arrayActual:ArrayFg
    })
    }  );
  }

  onSuccess(response) {
    var refUsuarios=ref.child(`${this.state.user}`+"/usuarios");
    var users=refUsuarios.push();
    users.set({
      nombre:response.profileObj.name,
      id:response.profileObj.googleId,
      email:response.profileObj.email,
    });

      }

onSelect= (active,direction)=>{
    console.log(`active=${active} && direction=${direction}`);
}

handleResponse = (data) => {
   console.log(data);
   var refUsuarios=ref.child(`${this.state.user}`+"/usuarios");
   var users=refUsuarios.push();
   users.set({
     nombre:data.profile.name,
     genero: data.profile.gender,
     id:data.profile.id,
     email:data.profile.email,
   });
   alert("lissto");


 }

 handleError = (error) => {
   this.setState({ error });
 }
render() {
  const images = [
    {
      original:this.state.arrayActual[0],
    },
    {
      original: this.state.arrayActual[1],
    },
    {
      original: this.state.arrayActual[2]
    }
  ]
  return(
    <div id='view'>
      <ImageGallery
        style={styleCarousel}
        items={images}
        slideInterval={5000}
        showThumbnails={false}
        showBullets={true}
        autoPlay={true}
        showPlayButton={false}
        showFullscreenButton={false}
        onImageLoad={this.handleImageLoad}/>
        <div id='view-buttons'>
          <h2 id='view-title'>¡OBTÉN UNA <span id='view-title-promocion'>PROMOCIÓN</span> <span id='view-title-exclusiva'>EXCLUSIVA</span>!</h2>
          <FaAngleDown size={35} style={styleArrowDown}/>
          <br/>
          <div id='facebok-button'>
            <FacebookProvider appId="253083618527049">
            <Login
              scope="email"
              onResponse={this.handleResponse}
              onError={this.handleError}
            >
              <Button style={socialButtonFacebook} bsStyle='none' bsSize="large" block>
                <p className='social-button-text'><Facebook size={23} style={socialIcon}/> Ingresa con Facebook </p>
              </Button>
            </Login>
            </FacebookProvider>
          </div>
          <div id='google-button' style={socialButtonGoogle}>
            <Google style={socialIcon}/>
            <GoogleLogin
              clientId="96640824865-fo9njpobpb72qq0qjpul344p8mdb82gf.apps.googleusercontent.com"
              buttonText={"Ingresa con Google"}
              onSuccess={this.onSuccess}
              onFailure={this.onSuccess}
              style={googleLoginComponent}
            />
        </div>
      </div>
    </div>
  )
}
}


//"auth != null"
export default View;
