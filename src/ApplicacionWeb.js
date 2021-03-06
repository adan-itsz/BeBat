import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import PromoActiva from './promoActiva.js';
import SubirPromo from './subirPromo.js';
import HistorialPromos from './historial.js';
import HistorialProgramadas from './historialProgramadas.js';
import Analitics from './analitics.js';
import './ApplicacionWeb.css';
import Actual from 'react-icons/lib/fa/map-marker'
import Subir from 'react-icons/lib/fa/arrow-circle-up'
import Anali from 'react-icons/lib/fa/bar-chart'
import Calendar from 'react-icons/lib/fa/calendar-o'
import config from './login.js'
import * as firebase from 'firebase';
import { ref, firebaseAuth } from './constants.js'
import logo from './logobebat.png'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';




class ApplicacionWeb extends Component {
  constructor(){
    super();
    this.state={
      logoWeb:' ',
      open: false,
      defaultSlide:"https://firebasestorage.googleapis.com/v0/b/bebat-d9540.appspot.com/o/imagenes-administrador%2FCargando.jpg?alt=media&token=4431afee-2f74-4962-95d1-3780f53e4b5f~https://firebasestorage.googleapis.com/v0/b/bebat-d9540.appspot.com/o/imagenes-administrador%2FCargando.jpg?alt=media&token=4431afee-2f74-4962-95d1-3780f53e4b5f",
      defaultSlideEsp:"https://firebasestorage.googleapis.com/v0/b/bebat-d9540.appspot.com/o/imagenes-administrador%2FIMG_3405.jpg?alt=media&token=0c6b6585-96d6-4c56-a6c8-628483678623",
    }
  }

  componentWillMount(){
    var self = this;
    var user =firebase.auth().currentUser
    var userDB = user.email.split('.').join('-');
      var imageDB;
      var p1=new Promise (
        function(resolve, reject){
  var refDB=ref.child("Clientes/"+userDB+"/logo");
          refDB.on('value', snapshot=>{
          resolve(imageDB=snapshot.val().logoWeb);
        });
      });
      p1.then(
        function(val){
          self.setState({
            logoWeb:val
          });

        }
      );
      var siSlide="";
      var user = firebase.auth().currentUser;
      var remplazo=`${user.email}`.split('.').join('-');
      var refDBActual=ref.child("Clientes/"+remplazo+"/SlideActual");
      var p2=new Promise (
        function(resolve, reject){
          refDBActual.on('value', snapshot=>{
              if(snapshot.exists()){
          resolve(siSlide=snapshot.val().slideActual);
            }
            else{
            console.log('hello');
            resolve();
            }

        });
      });
      p2.then(
        function(){
        if(siSlide==""){
              refDBActual.set({
                slideActual:self.state.defaultSlide,
                notas:"",
                nombreSlide:"undefined",
                fecha:"",
                especial: self.state.defaultSlideEsp,
              });
        }
        else{

        }

        }
      );



  }

  cambiarLogo(event){
    event.preventDefault();
    var downloadURL;
   var user =firebase.auth().currentUser

    var userDB = user.email.split('.').join('-');

      var promise;
    let reader = new FileReader();
   let file = event.target.files[0];
   const storageRef = firebase.storage().ref(`${user.email}`+"/logo/"+`${file.name}`)
 const task = storageRef.put(file)

        promise=new Promise(
      function(resolve,reject){
        task.on('state_changed', function(snapshot){

      }, function(error) {
          alert("error");
        }, function() {
      resolve(downloadURL = task.snapshot.downloadURL);
        });
      })
        promise.then(
            function(url){
            alert("esta "+url);
                  var refUsuarios=ref.child("Clientes/"+`${userDB}`+"/logo");
                refUsuarios.set({
                     logoWeb:url
                   });
            }
        )
  }
  handleOpen = () => {
  this.setState({open: true});

};

handleClose = () => {
  this.setState({open: false});
  window.location.reload();
};
  render() {
    var user = firebase.auth().currentUser;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (

      <Router>
        <div className="contenedor">
        <div id="barraLateral">
          <div id='logobarra'>
            <p className='text'>Haz click para cambiar logo</p>
            <img src={this.state.logoWeb} className='hover' onClick={this.handleOpen}/>
          </div>

          <Dialog
              title="Cambiar logo"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
          >
          <div id='logobarra2'>
            <img src={this.state.logoWeb}/>
          </div>
          <label className='custom-file-upload'>
            <input type='file' onChange={this.cambiarLogo.bind(this)}/>
            SUBIR IMAGEN
          </label>
          </Dialog>

          <div id='bienvenida'>
            <p id='parBienv'>Bienvenido</p>
            <div id="curruser">
              <p>{user.email}</p>
            </div>
          </div>
         <ul id='lista'>
           <li><Link to="/AppWeb"><span className="logoActual"><Actual size='25'/><p className='navOptions'>PROMOCION ACTUAL</p></span></Link></li>
           <li><Link to="/AppWeb/subir-promo"><span className="logoSubir"><Subir size='25'/><p className='navOptions'>SUBIR PROMOCION</p></span></Link></li>
           <li><Link to="/AppWeb/historial-promos"><span className="logoHistorial"><Calendar size='25'/><p className='navOptions'>HISTORIAL</p></span></Link></li>
           <li><Link to="/AppWeb/historial-programadas"><span className="logoHistorial"><Calendar size='25'/><p className='navOptions'>HISTORIAL PROGRAMADAS</p></span></Link></li>
           <li><Link to="/AppWeb/analitics"><span className="logoAnalitics"><Anali size='25'/><p className='navOptions'>ANALITICS</p></span></Link></li>
         </ul>
         <div id='salirPromo'>
           <a onClick={() => this.handleItemClick(firebaseAuth().signOut() )} href="/">Salir</a>
         </div>
      </div>
         <div className="contenidoComponente">
        <Route exact path="/AppWeb" component={PromoActiva} />
        <Route path="/AppWeb/subir-promo" component={SubirPromo} />
        <Route path="/AppWeb/historial-promos" component={HistorialPromos} />
        <Route path="/AppWeb/historial-programadas" component = {HistorialProgramadas}/>
        <Route path="/AppWeb/analitics" component={Analitics} />
          </div>
            </div>
          </Router>


    );
  }
}

export default ApplicacionWeb;

// App


//State less components
//Home
const Home = ()=> (
 <div>
   <Analitics texto='holassd'/>
 </div>
)
