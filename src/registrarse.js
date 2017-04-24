import React, { Component,PropTypes } from 'react';
import { Grid, Jumbotron, Button,Glyphicon,Form,FormGroup,ControlLabel,Col,FormControl,Checkbox } from 'react-bootstrap';
import * as firebase from 'firebase';
import './registrarse.css';


class Registro extends React.Component {
  handleClick = (n) => {
     alert('hola ' + this);
   }

    render() {

        return (
        <div id="registro">
         <div id="image">
          <h1 id="tituloRegistro"><Glyphicon glyph="chevron-right" />Registrate!</h1>
          <div id="regis">
            <Form onSubmit={this.props.registrarUsuario} method="post">
              <h3 id="h">INGRESA TUS DATOS</h3>
             <input type="text" name="nombre" placeholder="Nombre(s) *" required />
             <input type="text" name="apellidoPaterno" placeholder="Apellido Paterno *" required/>
             <input type="text" name="apellidoMaterno" placeholder="Apellido Materno *" required/>
             <input type="email" name="correo" placeholder="Correo *" required/>
             <input type="password"name="clave" placeholder="Contraseña *"  pattern=".{6,}"title="Debe contar con un mínimo de 6 caracteres" required/>
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
