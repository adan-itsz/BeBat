import React, { Component } from 'react';
import './App.css';
import './contacto.css';
import Circulo from 'react-icons/lib/fa/circle'

class Contacto extends React.Component {
  render(){
    return(
      <div id="contacto">
        <div className="footer">
          <div className="iconos">
            <div className="social">&#62220;</div>
            <div className="social">&#62217;</div>
            <div className="social">&#62223;</div>
          </div>
          <div className="dirtel">
            <div className="inicio">
              <h2>|<a href="#"> INICIO</a> |</h2>
            </div>
            <div className="ingresar">
              <h2>|<a href="#"> INGRESAR</a> |</h2>
            </div>
            <div className="nosotros">
              <h2>|<a href="#"> NOSOTROS</a> |</h2>
            </div>
            <div className="direccion">
              <h2>|<a href="#"> REGISTRARSE</a> |</h2>
            </div>
          </div>
          <div className="sub-footer">
           <ul className="contact">
            <li><Circulo/> Direccion Ficticia #1273</li>
            <li><Circulo/> correoB@BeBat.com</li>
            <li><Circulo/> 33-12-44-32</li>
           </ul>
           <div className="copyrigth">Copyright © 2017–2017 BeBat Inc.</div>
          </div>
        </div>
      </div>
   );
  }
}
export default Contacto;
