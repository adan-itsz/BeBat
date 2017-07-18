import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './promoActiva.css';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import { ref } from './constants.js'
import * as firebase from 'firebase'
import GoogleLogin from 'react-google-login';



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
class CaroucelArray extends Component{
  render(){
    return(
      <div className="itemCaroucel">
        <img src={this.props.url}/>
      </div>
    );
  }
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
            mes=date.getMonth();
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
          for (var j = i; j < recibirArray.length; j++) {
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
        mes:date.getMonth(),
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
          mes:date.getMonth(),
          ano:date.getFullYear()
        });

      }

    this.setState({
      arrayActual:ArrayFg
    })
    }  );
  }

  onSuccess(response) {
        alert('Logged in as: ' + response.profileObj.family_name);

      }


onSelect= (active,direction)=>{
    console.log(`active=${active} && direction=${direction}`);
}
render() {

  return(
    <div>
    <div id="carousel-main">
    <div style={{ margin:20}}>
      <React_Bootstrap_Carousel
        animation={true}
        onSelect={this.onSelect}
        className="carousel-fade"
      >
      {this.state.arrayActual.map(listaImgs=>{
        return (<CaroucelArray url={listaImgs}/>);})
      }
      </React_Bootstrap_Carousel>
      <GoogleLogin
  clientId="96640824865-fo9njpobpb72qq0qjpul344p8mdb82gf.apps.googleusercontent.com"
  buttonText="Entrar con Google"
  onSuccess={this.onSuccess}
  onFailure={this.onSuccess}
/>
    </div>
    </div>
    </div>
  )
}
}


//"auth != null"
export default View;
