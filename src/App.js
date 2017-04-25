import React, { Component,PropTypes } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import './App.css';
import SideBar from './nav.js';
import Nosotros from './nosotros.js'
import hablemos from './hablemos.png';
import Login from './login.js';
import Servicios from './servicios.js';
import Registro from './registrarse.js'
import * as firebase from 'firebase';
import AppStart from './index.js';

var config = {
  apiKey: "AIzaSyCoUdVIu_yMekq4UxPuEW7jY4pNqTLXt90",
  authDomain: "bebat-d9540.firebaseapp.com",
  databaseURL: "https://bebat-d9540.firebaseio.com",
  projectId: "bebat-d9540",
  storageBucket: "bebat-d9540.appspot.com",
  messagingSenderId: "179875780966"
};
firebase.initializeApp(config);
  var ban=true;
class App extends React.Component {


  addUser(event){
      event.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(event.target.correo.value, event.target.clave.value).catch(function(error) {
    ban=false;
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {

            alert('Wrong password.');
        }

    else if(errorCode=='auth/email-already-in-use'){
      alert("esa cuenta de correo ya esta en uso");
    }
    else {
            alert(errorMessage);
          }
          console.log(error);
        });
  }


  ingresar(event){
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(event.target.email.value,event.target.pass.value).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {

              alert('contraseña incorrecta');
          }
      else if(errorCode==='auth/user-not-found'){
            alert('Usuario inexistente');
      }
          else {
                  alert(errorMessage);
                }
                console.log(error);

});

firebase.auth().onAuthStateChanged(function(user){
  if(user){
    browserHistory.push('/Nosotros');
  } else {

  }
  });
}
    render() {
        return (
          <div>
            <div id="encabezado">
              <div className="container-fluid">
                  <SideBar />
                  {this.props.children}
              </div>
                <Login ingreso={this.ingresar.bind(this)}/>
              <button  id='comienza'type="button" href="#seccion-registro"  >Comienza ahora</button>
            <img id="portada"src="https://jumpingtalent.universia.es/wp-content/uploads/2017/02/office-writing.jpg"/>
            <img id="logo" src="codeJams-tinto.png"/>
          </div>
          <div id="seccion-nosotros">
              <Nosotros />
          </div>
          <div id="seccion-funciona">
            <Servicios/>
          </div>
          <div id="seccion-registro">
            <Registro registrarUsuario={this.addUser.bind(this)} />
          </div>

        </div>



        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
