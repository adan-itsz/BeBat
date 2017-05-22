import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import PromoActiva from './promoActiva.js';
import SubirPromo from './subirPromo.js';
import HistorialPromos from './historial.js';
import Analitics from './analitics.js';
import './ApplicacionWeb.css';


class ApplicacionWeb extends Component {
  render() {
    return (

      <Router>
        <div className="contenedor">
        <div id="barraLateral">
         <ul id='lista'>
           <li><Link to="/AppWeb">Promocion actual</Link></li>
           <li><Link to="/AppWeb/subir-promo">Subir Promocion</Link></li>
           <li><Link to="/AppWeb/historial-promos">Historial promociones</Link></li>
           <li><Link to="/AppWeb/analitics">Analitics</Link></li>

         </ul>
      </div>
         <div className="contenidoComponente">
        <Route exact path="/AppWeb" component={PromoActiva} />
        <Route path="/AppWeb/subir-promo" component={SubirPromo} />
        <Route path="/AppWeb/historial-promos" component={HistorialPromos} />
        <Route path="/AppWeb/analitics" component={Analitics} />
          </div>
            </div>
          </Router>


    );
  }
}

export default ApplicacionWeb;

// App


//State less components
//Home
const Home = ()=> (
 <div>
   <Analitics texto='holassd'/>
 </div>
)
