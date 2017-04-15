import React, { Component,PropTypes } from 'react';
import './App.css';
import SideBar from './nav.js';
import Nosotros from './nosotros.js'
import hablemos from './hablemos.png';
import Servicios from './servicios.js';

class App extends React.Component {
    render() {

        return (
          <div>
            <div id="encabezado">
              <div className="container-fluid">
                  <SideBar />
                  {this.props.children}
              </div>
              <button type='button'id='ingresar'>Ingresar</button>
              <button id='comienza'type="button" onclick="location.href=#seccion-funciona">Comienza ahora</button>
            <img id="portada"src="https://jumpingtalent.universia.es/wp-content/uploads/2017/02/office-writing.jpg"/>
            <img id="logo" src="codeJams-tinto.png"/>

          </div>
          <div id="seccion-nosotros">
              <Nosotros />
          </div>
          <div id="seccion-funciona">
            <Servicios/>
          </div>
        </div>

        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
