import React, { Component,PropTypes } from 'react';
import { Grid, Jumbotron, Button,Glyphicon,Form,FormGroup,ControlLabel,Col,FormControl,Checkbox } from 'react-bootstrap';
import * as firebase from 'firebase';
import './registrarse.css';
import { ref, firebaseAuth } from './constants.js'


class Registro extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    firebaseAuth().createUserWithEmailAndPassword(this.email.value, this.pw.value)
    .then(function(user) {
        user.sendEmailVerification()
        var userDB = user.email.split('.').join('-');
        var refUsuarios=ref.child(`${userDB}`+"/logo");
       refUsuarios.set({
           logoWeb:"https://firebasestorage.googleapis.com/v0/b/bebat-d9540.appspot.com/o/imagenes-administrador%2Ficono.ico?alt=media&token=5f9699e2-189a-46ed-a44c-ecf1857dc223"
         });
    }).then(function () {
        alert("Confirme su correo para poder logearse");
    }).catch(function (error) {
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
    render() {

        return (
        <div id="registro">
         <div id="image">
          <h1 id="tituloRegistro"><Glyphicon glyph="chevron-right" />Registrate!</h1>
          <div id="regis">
            <Form onSubmit={this.handleSubmit} method="post">
              <h3 id="h">INGRESA TUS DATOS</h3>
             <input type="text" name="nombre" placeholder="Nombre(s) *" required />
             <input type="text" name="apellidoPaterno" placeholder="Apellido Paterno *" required/>
             <input type="text" name="apellidoMaterno" placeholder="Apellido Materno *" required/>
             <input type="email" name="correo" ref={(email) => this.email = email}  placeholder="Correo *" required/>
             <input type="password"name="clave" placeholder="Contraseña *" ref={(pw) => this.pw = pw}  pattern=".{6,}"title="Debe contar con un mínimo de 6 caracteres" required/>
             <input type="text" placeholder="RFC " />
             <input type="text" placeholder="Telefono " />

             <a id="cue"href="#">¿Ya tienes una cuenta?</a>

              <label id="checkLabel">Al presionar el botón aceptar, estarás de acuerdo con nuestros:<a id="terminos"  href="#"> términos y condiciones</a></label>
             <Button id="btnaceptar" type="submit" bsSize="large" >Aceptar</Button>
               </Form>
          </div>
            <div id="espacio">espacio</div>
          </div>
         </div>
        );
    }
  }



export default Registro;
