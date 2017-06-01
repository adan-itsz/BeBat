import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import * as firebase from 'firebase'
import './subirPromo.css';
import { ref } from './constants.js'

const database = firebase.database();

class Promo extends Component{
  render(){
    return(
      <li> <img src={this.props.p}/></li>
    );
  }
}

class SubirPromo extends Component {
  constructor(){
    super();
    this.state={
      uploadStatus:0,
      contador:0,
       arreglo:[],
       arrayPreview:[],
       arrayStorage:[]


    }
    this.agregarImagenes=this.agregarImagenes.bind(this);
    this.subirDb=this.subirDB.bind(this);
  }

  recortarCadenas(correo){
    var remplazo=correo.split('.').join('-');
    return remplazo;
  }


  agregarImagenes(a){
       if(a!=null && this.state.contador <= 5){
         this.setState({
          contador: this.state.contador +=1,
          arrayPreview:this.state.arrayPreview.concat([{url:this.state.imagePreviewUrl}]),
          arreglo:this.state.arreglo.concat([{a}])});
      }
    }


    subirDB(){
      var user = firebase.auth().currentUser;
      var correoUsuario=this.recortarCadenas(`${user.email}`);
      alert(correoUsuario);
      var refDBHistorial=ref.child(correoUsuario+"/Historial");
     var refDB=ref.child(correoUsuario+"/SlideActual");
      var HistorialSlidesDB=refDBHistorial.push();
      HistorialSlidesDB.set({
        historial:`${this.state.arreglo}`
      });
   refDB.set({
        slideActual:`${this.state.arreglo}`,
        contador:3
      });
    }


subeSlide(){
  this.state.arreglo.map(listaAAgregar=>{
    var user = firebase.auth().currentUser;
    const file = listaAAgregar.a
    const storageRef = firebase.storage().ref(`${user.email}/${this.nombre_slide.value}/${file.name}`)
    const task = storageRef.put(file)
    task.on('state_changed', snapshot => {
             let per = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
             this.setState({
                uploadStatus : per
             })
          }, (error) => {
             this.setState({
                message : `Alert!, ${error.message}`
             })
          },
          () => {
            this.setState({
               picture : task.snapshot.downloadURL,
              // arrayStorage:this.state.arrayStorage.concat([{url:this.state.picture}])
            })}
 		 )
   });
   this.subirDB();

}


handleOnChange (event) {
  event.preventDefault();
  let reader = new FileReader();
 let file = event.target.files[0];
 reader.onloadend = () => {
   this.setState({
     file: file,
     imagePreviewUrl: reader.result
   });
    this.agregarImagenes(file);
 }
 reader.readAsDataURL(file)
   }

  render() {

    return (
      <div>
     <progress value={this.state.uploadStatus} max="100">
       {this.state.uploadStatus}%
     </progress>

       <input id="inputSubir" type='file' onChange={this.handleOnChange.bind(this)}/>
        <button onClick={() => this.subeSlide()}>cargar</button>
        <input id='nombre_slide' type='text' name="nombre_slide" ref={(nombre_slide) => this.nombre_slide = nombre_slide} required/>


       <div id='gallery'>
       <ul className="listaPromos">
              {this.state.arrayPreview.map(listaImgs=>{
                return (<Promo p={listaImgs.url}/>);})
              }
      </ul>
       </div>
     </div>
    );
  }


}

export default SubirPromo;
