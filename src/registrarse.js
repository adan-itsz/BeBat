import React, { Component,PropTypes } from 'react';
import { Grid, Jumbotron, Button,Glyphicon,Form,FormGroup,ControlLabel,Col,FormControl,Checkbox } from 'react-bootstrap';

import './registrarse.css';


class Registro extends React.Component {
    render() {
        return (
        <div id="registro">
          <img src="https://source.unsplash.com/QnjkbXywIyY/2100x1400"/>
          <h1 id="tituloRegistro"><Glyphicon glyph="chevron-right" />Registrate!</h1>
          <div id="regis">

            <Form action="s.html" method="post">
              <h3 id="h">INGRESA TUS DATOS</h3>
             <input type="text" placeholder="Nombre(s) *" required />
             <input type="text" placeholder="Apellido Paterno *" required/>
             <input type="text" placeholder="Apellido Materno *" required/>
             <input type="email" placeholder="Correo *" required/>
             <input type="password" placeholder="Contraseña *" required/>
             <input type="text" placeholder="RFC " />
             <input type="text" placeholder="Telefono " />

             <a id="cue"href="#">¿Ya tienes una cuenta?</a>


              <label id="checkLabel">Al presionar el botón aceptar, estarás de acuerdo con nuestros:<a id="terminos"  href="#"> términos y condiciones</a></label>


             <Button id="btnaceptar" type="submit" bsSize="large">Aceptar</Button>
               </Form>
          </div>
            <div id="espacio">espacio</div>
         </div>
        );
    }
}

export default Registro;
