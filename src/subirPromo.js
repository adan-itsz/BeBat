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
  handleClick = () => this.props.onClick(this.props.index);
  render(){
    var id = this.props.id;
    return(
      <li>
        <div className={this.props.isActive ? 'active' : 'imagenSubir'} >
          <img src={this.props.p}/>
          <button className="buttonSubir" button onClick={()=>this.props.funEliminar(id)}>Eliminar</button>
          <button 
            type='button' 
            onClick={this.handleClick}
            className='buttonEspecial'
          >
            Especial
          </button>
        </div>
      </li>
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
       date:"",
       activeIndex: 0,
       especial:"",
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
        fecha:this.state.date,
        especial: this.state.especial
      });
   refDB.set({
        slideActual:`${this.state.arrayStorage}`,
        notas:notas,
        nombreSlide:nombreSlide,
        fecha:this.state.date,
        especial: this.state.especial
      });
    }


subeSlide(){
  var array2=this.state.arreglo;
  let promoEspecial;
  let self = this;
  var contador=0;
  var user = firebase.auth().currentUser;
  
  const archivo = this.state.arreglo[this.state.activeIndex].a;
  const ref = firebase.storage().ref(`${user.email}/${self.nombre_slide.value}/Especial/${archivo.name}`)
  const task = ref.put(archivo)

  var promise = new Promise(
    function(resolve,reject){
      
        task.on('state_changed',function(snapshot){
        
        },(error) =>{
          alert(error);
        },()=>{
          resolve(
          promoEspecial = task.snapshot.downloadURL,
          self.setState({
            especial:promoEspecial,
          }),
           array2.splice(self.state.activeIndex,1),
           self.setState({
              arreglo:array2,
           }),
          )
        })
    })

 
  var cantidad=array2.length-1;

  promise.then(
    function(){
      self.state.arreglo.map(listaAAgregar=>{
      const file = listaAAgregar.a
      const storageRef = firebase.storage().ref(`${user.email}/${self.nombre_slide.value}/${file.name}`)
      const task = storageRef.put(file)
      task.on('state_changed', snapshot => {
               let per = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
               self.setState({
                  uploadStatus : per
               })
            }, (error) => {
               self.setState({
                  message : `Alert!, ${error.message}`
               })
            },
            () => {
              contador++;
              self.setState({
               arrayStorage:self.state.arrayStorage+"~"+task.snapshot.downloadURL
              })
              if(contador>=cantidad){
              self.subirDB();
            }
            },
       );

     })
    }
  )
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

handleClick = (index) => this.setState({activeIndex:index})

render() {

  const style = {
      margin: 12,
      backgroundColor:'#231F20',
  };


    return (
      <MuiThemeProvider>
      <div>
      <div id='gallery'>
      <ul className="listaPromos">
             {this.state.arrayPreview.map((listaImgs,i)=>{
               return (
                <Promo key={i} id={i} index={i} 
                  isActive={this.state.activeIndex===i} 
                  funEliminar={this.eliminarImg.bind(this)} 
                  p={listaImgs.url}
                  onClick={this.handleClick}/>
                );
              })
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
       <div id='buttonCarga'>
        <RaisedButton label="Cargar" primary={true} style={style} onClick={() => this.subeSlide()} />
       </div>
     </div>
     </MuiThemeProvider>
    );
  }


}

export default SubirPromo;
