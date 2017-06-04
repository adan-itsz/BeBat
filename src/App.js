import React, { Component,PropTypes } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import {  BrowserRouter as Router,  Route,  Link,Redirect,withRouter} from 'react-router-dom'
import { browserHistory } from 'react-router';
import './App.css';
import SideBar from './nav.js';
import Nosotros from './nosotros.js'
import hablemos from './hablemos.png';
import Login from './login.js';
import Servicios from './servicios.js';
import Registro from './registrarse.js'
import Contacto from './contacto.js';
import * as firebase from 'firebase';
import ReactVideo from 'react.video';


  var ban=true;
class App extends React.Component {



    render() {
        return (
          <div>
            <div id="encabezado">
              <div className="container-fluid">
                  <SideBar />
                  {this.props.children}
              </div>

              <Link to="/AppWeb" id='ingresar' href="#myModal" >Ingresar</Link>

            <ReactVideo ref={'VideoComp'}
              cls={'portada'}
              height={'100%'} width={'100%'}
              controls={false}
              muted={true}
              src={'bebat-web-2.mp4'}
              autoPlay={true}
              loop={true}
            >
              </ReactVideo>
          </div>
          <div id="seccion-nosotros">
              <Nosotros />
          </div>
          <div id="seccion-funciona">
            <Servicios/>
          </div>
          <div id="seccion-registro">
            <Registro />
          </div>
          <div id="seccion-contacto">
            <Contacto />
          </div>
        </div>



        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
