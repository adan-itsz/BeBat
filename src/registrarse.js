import React, { Component,PropTypes } from 'react';
import { Grid, Jumbotron, Button,Glyphicon,Form,FormGroup,ControlLabel,Col,FormControl,Checkbox } from 'react-bootstrap';
import * as firebase from 'firebase';
import './registrarse.css';
import { ref, firebaseAuth } from './constants.js'


class Registro extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    firebaseAuth().createUserWithEmailAndPassword(this.email.value, this.pw.value).catch(function(error) {

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
