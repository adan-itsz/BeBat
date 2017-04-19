import React, { Component,PropTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Jumbotron, Button,Glyphicon,Form,FormGroup,ControlLabel,Col,FormControl,Checkbox } from 'react-bootstrap';
import './App.css';
import './registrarse.css';


class Registro extends React.Component {
    render() {
        return (
        <div id="registro">
          <img src="https://source.unsplash.com/QnjkbXywIyY/1600x900"/>
          <h1 id="tituloRegistro"><Glyphicon glyph="chevron-right" />Registrate!</h1>
          <div id="regis">
            <h3 id="h">INGRESA TUS DATOS</h3>
            <form action="s.html" method="post">
             <input type="text" placeholder="Nombre(s) *" required />
             <input type="text" placeholder="Apellido Paterno *" required/>
             <input type="text" placeholder="Apellido Materno *" required/>
             <input type="email" placeholder="Correo *" required/>
             <input type="password" placeholder="Contraseña *" required/>
             <input type="text" placeholder="RFC " />
             <input type="text" placeholder="Telefono " />
             <a id="cuenta"href="#">¿Ya tienes una cuenta?</a>
             <div id="terminos">
               <Checkbox readOnly>
                 Acepto<a href="#"> términos y condiciones</a>
               </Checkbox>
             </div>


             <Button type="submit" bsSize="large">Aceptar</Button>
            </form>
          </div>
         </div>
        );
    }
}

export default Registro;
