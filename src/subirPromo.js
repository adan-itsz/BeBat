import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import * as firebase from 'firebase'
import './subirPromo.css';
import { ref } from './constants.js'
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Jumbotron, Button,Glyphicon,Form,FormGroup,ControlLabel,Col,FormControl,Checkbox } from 'react-bootstrap';
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
       fechaInitdefault:"",
       horaInitdefault:"",
       fechaFinaldefault:"",
       fechaMaxima:"",
       horaFinaldefault:"",
       HInicial:"",
       FInicial:"",
       HFinail:"",
       FFinal:"",
       SlideP:0,
       TimeEnable:false,
    }
    this.agregarImagenes=this.agregarImagenes.bind(this);
    this.subirDb=this.subirDB.bind(this);

  }

  recortarCadenas(correo){
    var remplazo=correo.split('.').join('-');
    return remplazo;
  }


  agregarImagenes(a){
       if(a!=null && this.state.arrayPreview.length < 4 && this.state.arreglo.length < 4){
         this.setState({
          contador: this.state.contador +=1,
          arrayPreview:this.state.arrayPreview.concat([{url:this.state.imagePreviewUrl}]),
          arreglo:this.state.arreglo.concat([{a}])});
      }else{
        alert("El limite de imagenes permitido es cuatro.")
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
      if(this.state.SlideP==1){

        var user = firebase.auth().currentUser;
        var nombreSlide=this.nombre_slide.value;
        var notas=this.refs.notas.getValue();
        var correoUsuario=this.recortarCadenas(`${user.email}`);
        var refDBHistorial=ref.child(correoUsuario+"/Programadas");
        var HistorialSlidesDB=refDBHistorial.push();

        HistorialSlidesDB.set({
          historial:`${this.state.arrayStorage}`,
          notas:notas,
          nombreSlide:nombreSlide,
          fecha:this.state.date,
          especial: this.state.especial,
          horaInicialDB:this.state.HInicial,
          fechaInicialDB:this.state.FInicial,
          horaFinalDB:this.state.HFinail,
          fechaFinalDB:this.state.FFinal,
        });

      }
      else{
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
      window.location.reload();
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

handleSubmit = (e) => {
  e.preventDefault()
   var yearInit = this.fecha_inicial.value.split("-")[0];
    var monthInit =  this.fecha_inicial.value.split("-")[1];
    var dayInit =  this.fecha_inicial.value.split("-")[2];
  var hourInit = this.hora_inicial.value.split(":")[0];
  var minuteInit = this.hora_inicial.value.split(":")[1];

  var yearEnd = this.fecha_final.value.split("-")[0];
   var monthEnd =  this.fecha_final.value.split("-")[1];
   var dayEnd =  this.fecha_final.value.split("-")[2];
 var hourEnd = this.hora_final.value.split(":")[0];
 var minuteEnd = this.hora_final.value.split(":")[1];



 this.setState({
   SlideP:1,
   HInicial :hourInit+":"+minuteInit+":00",
   FInicial : dayInit+"-"+monthInit+"-"+yearInit,
   HFinail :hourEnd+":"+minuteEnd+":00",
   FFinal :dayEnd+"-"+monthEnd+"-"+yearEnd,

 });
this.subeSlide();



}
componentWillMount(){
          //se hace la peticion al servido del Time
            var offsetRef = firebase.database().ref(".info/serverTimeOffset");
            var self=this;
            var offset;
            var promise = new Promise(
              function(resolve,reject){
                offsetRef.on("value", snapshot =>{
                    resolve(
                      offset = snapshot.val(),
                    )
                });
              }
            )
            promise.then(
              function(offset){
          var estimatedServerTimeMs = new Date().getTime() + offset;
              //se obtine ano, mes, hora y minutos
                let d = new Date(estimatedServerTimeMs);
                let dia = d.getDate();
                let mes = d.getMonth()+1;
                let mes2 =d.getMonth()+3;
                let ano = d.getFullYear();
                let hora = d.getHours();
                let minute = d.getMinutes();
                //se le agrega un 0 si es menor a 9 tanto al mes, dia y minuto
                if(dia<=9){
                  dia="0"+dia;
                }
                if(minute<=9){
                  minute="0"+minute;
                }

                if(mes<=9){
                  mes="0"+mes;
                }
                if(mes2<=9){
                  mes2="0"+mes2;
                }
                self.setState({
                  fechaInitdefault:ano+"-"+mes+"-"+dia,
                  horaInitdefault:hora+":"+minute,
                  fechaFinaldefault:ano+"-"+mes2+"-"+dia,
                  horaFinaldefault:hora+":"+minute,
                  fechaMaxima:ano+1+"-"+mes+"-"+dia,
                })
                console.log('terminado');
              }
            )


}
TimeEnable(){
  if(this.state.TimeEnable==true){
    this.setState({
      TimeEnable:false,
    })
  }
  else {
    this.setState({
      TimeEnable:true,
    })
  }

}

render() {

  const style = {
      margin: 12,
      backgroundColor:'#231F20',
  };


  let TimePI = null;
  let DatePI = null;
  let TimePF = null;
  let DatePF = null;
  let label1 = null;
  let label2 = null;
  let boton = null;
//si son son diferentes de "" se cargan
  if (this.state.fechaInitdefault!=""&&this.state.horaInitdefault!=""&&this.state.horaFinaldefault!=""&&this.state.fechaFinaldefault!="" && this.state.TimeEnable==true) {
    label1 = <label>Hora y fecha inicial</label>;
    label2 = <label>Hora y fecha final</label>;
    boton =  <RaisedButton type="submit" label="Publicar" primary={true} style={style} />;
    TimePI = <input type="time" id="horaInicial" defaultValue={this.state.horaInitdefault} ref={(hora_inicial) => this.hora_inicial = hora_inicial} />;
    DatePI = <input type="date" id="fechaInicial" min={this.state.fechaInitdefault} defaultValue={this.state.fechaInitdefault} ref={(fecha_inicial) => this.fecha_inicial = fecha_inicial}/>
    TimePF = <input type="time" id="horaFinal" defaultValue={this.state.horaFinaldefault} ref={(hora_final) => this.hora_final = hora_final} />
    DatePF = <input type="date" id="fechaFinal" max={this.state.fechaMaxima}defaultValue={this.state.fechaFinaldefault} ref={(fecha_final) => this.fecha_final = fecha_final} />
  }

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
        <RaisedButton label="Publicar Ahora" primary={true} style={style} onClick={() => this.subeSlide()} />
        <RaisedButton label="Programar" primary={true} style={style}  onClick={() => this.TimeEnable()}  />
       </div>
       <Form onSubmit={this.handleSubmit} method="post">
       <div id="programar">
       <div id='HF'>
       {label1}
       {TimePI}
       {DatePI}
 </div>
      <div id='HF'>
      {label2}
      {TimePF}
      {DatePF}
      {boton}
     </div>

  </div>


    </Form>
     </div>
     </MuiThemeProvider>
    );
  }


}

export default SubirPromo;
