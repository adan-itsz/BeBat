import React, { Component,PropTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Jumbotron, Button,Glyphicon,Form,FormGroup,ControlLabel,Col,FormControl } from 'react-bootstrap';
import './App.css';
import './registrarse.css';


class Registro extends React.Component {
    render() {
        return (
        <div id="registro">
          <h1><Glyphicon glyph="chevron-right" />Registrarse</h1>
          <div class="wrapper">
            <Form class="form-signin">
              <h2 class="form-signin-heading">Ingresa tus datos</h2>
              <input type="text" class="form-control" name="username" placeholder="Correo" required="" autofocus="" />
              <input type="password" class="form-control" name="password" placeholder="Contraseña" required=""/>

              <Button bsSize="large" bsStyle="primary" type="submit">Registrarse</Button>
            </Form>
          </div>
         </div>
        );
    }
}

export default Registro;
