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
import ReactDOM from 'react-dom'


import './View.css'

import Scroll from 'react-scroll'

let scroll = Scroll.animateScroll;

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

class Especial extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <div>
        <img id='promo-especial' src={this.props.imgEspecial}/>
        </div>
        <div></div>
      </div>
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
  marginRight: '5%'
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
        anoCount:0,
        logoWeb:' ',
        tituloS:"",
        loggedIn:false,
        especial:"",
      }
  this.logo();
  //  ga('send', this.state.user);
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
      var titulo;
      let promoEspecial;

    var refDB=ref.child(this.state.user+"/SlideActual");
    refDB.on('value', snapshot=> {
      recibirArray=snapshot.val().slideActual;
      titulo=snapshot.val().nombreSlide;
      promoEspecial = snapshot.val().especial;
      this.setState({
        especial: promoEspecial,
      })
      document.title=titulo;
    var StringN="";
    var ArrayFg=[];
    for (var i = 0; i < recibirArray.length; i++) {
            if(recibirArray[i] =='~'){
              for (var j = i+1; j < recibirArray.length; j++) {
                if(recibirArray[j]!='~'){
                  StringN += recibirArray.substring(j,j+1);
                }
                else if (recibirArray[j]=='~'&&j!=0||j+1==recibirArray.length) {
                  ArrayFg = ArrayFg.concat({original:StringN});

                  StringN="";
                }
              }
              if(j==recibirArray.length){
                ArrayFg = ArrayFg.concat({original:StringN});
                break;
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
      arrayActual:ArrayFg,
    })
    }  );


  }

  logo(){
    var userDB = this.state.user;
    var self = this;
      var imageDB;
      var p1=new Promise (
        function(resolve, reject){
  var refDB=ref.child(userDB+"/logo");
          refDB.on('value', snapshot=>{
          resolve(imageDB=snapshot.val().logoWeb);
        });
      });
      p1.then(
        function(val){
          self.setState({
            logoWeb:val
          });
          document.head || (document.head = document.getElementsByTagName('head')[0]);

           var link = document.createElement('link'),
               oldLink = document.getElementById('dynamic-favicon');
           link.id = 'dynamic-favicon';
           link.rel = 'shortcut icon';
           link.href = self.state.logoWeb;
           if (oldLink) {
            document.head.removeChild(oldLink);
           }
           document.head.appendChild(link);
        }
      );


  }

  onSuccess(response) {
    this.setState({
      loggedIn: true,
    });
    var refUsuarios=ref.child(`${this.state.user}`+"/usuarios");
    var users=refUsuarios.push();
    users.set({
      nombre:response.profileObj.name,
      id:response.profileObj.googleId,
      email:response.profileObj.email,
    });
    scroll.scrollToBottom()
  }

onSelect= (active,direction)=>{
    console.log(`active=${active} && direction=${direction}`);
}

handleResponse = (data) => {
  var self=this;
   console.log(data);
   var h,m;
    var refGenero=ref.child(`${this.state.user}`+"/usuarios/genero");
    var promise= new Promise(
      function(resolve,reject){
    refGenero.on('value',snapshot=>{

      resolve(
        h=snapshot.exists() ? snapshot.val().hombre:0,
        m=snapshot.exists()? snapshot.val().mujer:0
      )
    });
  }
  )
  promise.then(
    function(){
   var refUsuarios=ref.child(`${self.state.user}`+"/usuarios");
   var users=refUsuarios.push();
   users.set({
     nombre:data.profile.name,
     genero: data.profile.gender,
     id:data.profile.id,
     email:data.profile.email,
   });

   if(data.profile.gender=='male'){
     h+=1;
   }
   if(data.profile.gender=='female'){
     m+=1;
   }
   refGenero.set({
     hombre:h,
     mujer:m
   })
   self.setState({
    loggedIn: true,
   })
   scroll.scrollToBottom()
 })

 }

 handleError = (error) => {
   this.setState({ error });
 }

render() {
  return(
    <div id='view'>
      <ImageGallery
        style={styleCarousel}
        items={this.state.arrayActual}
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
              <Button style={socialButtonFacebook} bsStyle='none' bsSize="large" >
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
              onSuccess={this.onSuccess.bind(this)}
              onFailure={this.onSuccess}
              style={googleLoginComponent}
            />
        </div>
      </div>
      <div >
        {this.state.loggedIn ? (
          <Especial imgEspecial={this.state.especial}/>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  )
}
}


//"auth != null"
export default View;
