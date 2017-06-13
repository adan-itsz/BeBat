import React, { Component,PropTypes } from 'react';
import './App.css';
import './servicios.css'
import Broadcast from 'react-icons/lib/go/broadcast'
import Rigth from 'react-icons/lib/ti/chevron-right-outline'
import Left from 'react-icons/lib/ti/chevron-left-outline'
import beacon from './beacon1.png'
import beacon2 from './beacon2.png'


class Servicios extends React.Component {
    render() {
        return (
        		<div id="servi">
              <div id="servicios-imagen">
                <h3 id='servicios-titulo'>Beneficios</h3>
                <div id='beacon-yw'>
                  <img id='beacon-amarillo'src={beacon}/>
                </div>
                <ul id='servicios-lista'>
                  <li>-Información relevante en tiempo real</li>
                  <li>-Mayor Alcance</li>
                  <li>-Experiencia envolvente</li>
                  <li>-Más Clientes</li>
                </ul>
              </div>
        		</div>
        );
    }
}

export default Servicios;
