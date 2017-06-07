import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import * as firebase from 'firebase'
import './subirPromo.css';
import { ref } from './constants.js'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';
import TextField from 'material-ui/TextField';

var d = new Date();
const database = firebase.database();

class Promo extends Component{
  render(){
    var id = this.props.id;
    return(
      <li><div className="imagenSubir"><img src={this.props.p}/>< button className="buttonSubir" button onClick={()=>this.props.funEliminar(id)}>Eliminar</button></div></li>
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
       arrayStorage:[],
       date:""
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
    eliminarImg(index){
      var array=this.state.arrayPreview;
      var arregloFile=this.state.arreglo;
      array.splice(index,1);
      arregloFile.splice(index,1);
      this.setState({
        arrayPreview:array,
        arreglo:arregloFile,
      })
    }


    subirDB(){
      var user = firebase.auth().currentUser;
      var nombreSlide=this.nombre_slide.value;
      var notas=this.refs.notas.getValue();
      var correoUsuario=this.recortarCadenas(`${user.email}`);
      var refDBHistorial=ref.child(correoUsuario+"/Historial");
     var refDB=ref.child(correoUsuario+"/SlideActual");
      var HistorialSlidesDB=refDBHistorial.push();
      HistorialSlidesDB.set({
        historial:`${this.state.arrayStorage}`,
        notas:notas,
        nombreSlide:nombreSlide,
        fecha:this.state.date
      });
   refDB.set({
        slideActual:`${this.state.arrayStorage}`,
        notas:notas,
        nombreSlide:nombreSlide,
        fecha:this.state.date,
      });
    }


subeSlide(){
  var array2=this.state.arreglo;
  var cantidad=array2.length;
  var contador=0;
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
            contador++;
            this.setState({
             arrayStorage:this.state.arrayStorage+"~"+task.snapshot.downloadURL
            })
            if(contador>=cantidad){
            this.subirDB();
          }
          },
 		 );

   })
}


handleOnChange (event) {
  event.preventDefault();
  let fecha=d.getDate() + "/" + (parseInt(d.getMonth())+parseInt(1))+ "/" +d.getFullYear();
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
 this.setState({
   date:fecha
 });
   }



  render() {

    const style = {
      margin: 12,
  };


    return (
      <MuiThemeProvider>
      <div>
      <div id='gallery'>
      <ul className="listaPromos">
             {this.state.arrayPreview.map((listaImgs,i)=>{
               return (<Promo key={i} id={i} funEliminar={this.eliminarImg.bind(this)} p={listaImgs.url}/>);})
             }
     </ul>
      </div>
     {/*<progress value={this.state.uploadStatus} max="100">
       {this.state.uploadStatus}%
     </progress>*/}
      <LinearProgress mode="determinate" value={this.state.uploadStatus} />
      <label className='custom-file-upload'>
        <input type='file' onChange={this.handleOnChange.bind(this)}/>
        SUBIR IMAGEN
      </label>
       <div id='slide-datos'>
       <div id='slide-nombre'>
         <p>Nombre del Slide</p>
         <input id='nombre_slide' type='text' name="nombre_slide" ref={(nombre_slide) => this.nombre_slide = nombre_slide} required/>
       </div>
       <div id='slide-notas'>
         <p>Notas</p>
         <div id='text-field'>
           <TextField ref='notas' hintText="" multiLine={true} rows={2} rowsMax={4}/>
         </div>
       </div>
       </div>
       <RaisedButton label="Cargar" primary={true} style={style} onClick={() => this.subeSlide()} />
     </div>
     </MuiThemeProvider>
    );
  }


}

export default SubirPromo;
