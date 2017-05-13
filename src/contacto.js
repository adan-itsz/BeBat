import React, { Component } from 'react';
import './App.css';
import './contacto.css';

class Contacto extends React.Component {
  render(){
    return(
      <div id="contacto">
      <div className="content">Contactanos!
        <div className="telefono">
          <h1>Llamanos</h1>
          <h2> 333-14-53-66-32</h2>
          <h2> 333-14-53-66-32</h2>
        </div>
        <div className="direccion">
          <h1>Visitanos</h1>
          <h2>Calle Ficticia #6723</h2>
        </div>
      </div>
        <div className="footer">
          <div className="social">&#62220;</div>
          <div className="social">&#62217;</div>
          <div className="social">&#62223;</div>
          <div className="social">&#62232;</div>
          <div className="social">&#62235;</div>
          <div className="social">&#62226;</div>
          <div className="social">&#62214;</div>
        </div>
      </div>
   );
  }
}
export default Contacto;
