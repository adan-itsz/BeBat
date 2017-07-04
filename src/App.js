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
import Typing from 'react-typing-animation'
import logo from './logobebatwhite.png'

const AnimatedTypingComponent = () => (
  <Typing loop={true} className="type">
    <span>BeBat</span>
    <Typing.Reset count={1} delay={800} />
    <span>Más Clientes.</span>
    <Typing.Reset count={1} delay={800} />
    <span>Más Alcance.</span>
    <Typing.Reset count={1} delay={800} />
  </Typing>
);

  var ban=true;
class App extends React.Component {
    render() {
        return (
          <div id="portada">
            <div id="encabezado">
              <div className="container-fluid">
                  <SideBar />
                  {this.props.children}
              </div>

              <Link to="/AppWeb" id='ingresar' href="#myModal" >Ingresar</Link>
              <div id="logobe">
                 <img src={logo}/>
              </div>
            <AnimatedTypingComponent />
            <div class="video-container">
                 <video id="background-video" autoPlay loop muted>
                        <source src="bebat-web-2.mp4" type="video/mp4; "/>
                    </video>
                </div>
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
