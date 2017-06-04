import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import PromoActiva from './promoActiva.js';
import SubirPromo from './subirPromo.js';
import HistorialPromos from './historial.js';
import Analitics from './analitics.js';
import './ApplicacionWeb.css';
import Actual from 'react-icons/lib/fa/map-marker'
import Subir from 'react-icons/lib/fa/arrow-circle-up'
import Anali from 'react-icons/lib/fa/bar-chart'
import Calendar from 'react-icons/lib/fa/calendar-o'
import config from './login.js'
import * as firebase from 'firebase';
import { ref, firebaseAuth } from './constants.js'
import logo from './logobebat.png'



class ApplicacionWeb extends Component {
  render() {
    var user = firebase.auth().currentUser;
    return (

      <Router>
        <div className="contenedor">
        <div id="barraLateral">
          <div id='logobarra'>
            <img src={logo}/>
          </div>
          <div id='bienvenida'>
            <p id='parBienv'>Bienvenido</p>
            <div id="curruser">
              <p>{user.email}</p>
            </div>
          </div>
         <ul id='lista'>
           <li><Link to="/AppWeb"><span className="logoActual"><Actual size='25'/><p className='navOptions'>PROMOCION ACTUAL</p></span></Link></li>
           <li><Link to="/AppWeb/subir-promo"><span className="logoSubir"><Subir size='25'/><p className='navOptions'>SUBIR PROMOCION</p></span></Link></li>
           <li><Link to="/AppWeb/historial-promos"><span className="logoHistorial"><Calendar size='25'/><p className='navOptions'>HISTORIAL</p></span></Link></li>
           <li><Link to="/AppWeb/analitics"><span className="logoAnalitics"><Anali size='25'/><p className='navOptions'>ANALITICS</p></span></Link></li>
         </ul>
         <div id='salirPromo'>
           <a onClick={() => this.handleItemClick(firebaseAuth().signOut() )} href="/">Salir</a>
         </div>
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
