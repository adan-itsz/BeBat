import React, { Component } from 'react';
import logo from './logo.svg';
import './grid.css';
import './index.css';
import mac from './maclaptop.png'

//icons
import FaHeart from 'react-icons/lib/fa/heart';
import FaPaperPlaneO from 'react-icons/lib/fa/paper-plane-o';
import GoGift from 'react-icons/lib/go/gift';
import GoLightBulb from 'react-icons/lib/go/light-bulb';

//icons social-media
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';
import FaTwitter from 'react-icons/lib/fa/twitter';

class Header extends Component{
  render(){
    return(
      <div className="header-div">

        <header>
        <nav>
          <div className="row">
            <ul className="main-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">¿Como funciona?</a></li>
              <li><a href="#">Comenzar</a></li>
            </ul>
          </div>
        </nav>
          <div className="hero-text-box">
            <h1>Bebat</h1>
            <a className="btn btn-full" href="/AppWeb">Ingresar</a>
          </div>
        </header>
      </div>
    )
  }
}

class SectionWhy extends Component{
  render(){
    return(
      <div className="section-why">
        <section>
          <div className="row">
            <h2>¿Por qué usar BeBat?</h2>
            <p className="long-copy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent dictum sit amet purus a posuere.
              Fusce sollicitudin tellus et pulvinar congue.
              Proin sed viverra nisl. Proin tincidunt dui ac maximus vestibulum.
            </p>
            </div>
            <div className="row">
              <div className="col span_1_of_2 box">
                <FaHeart />
                <h3>Crea experiencias únicas.</h3>
                <p className="long-copy">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum sit amet purus a posuere.
                </p>
              </div>
              <div className="col span_2_of_2 box">
                <FaPaperPlaneO/>
                <h3>Envía información relevante.</h3>
                <p className="long-copy">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum sit amet purus a posuere.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col span_1_of_2 box">
                <GoGift/>
                <h3>Prémialos.</h3>
                <p className="long-copy">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum sit amet purus a posuere.
                </p>
              </div>
              <div className="col span_2_of_2 box">
                <GoLightBulb/>
                <h3>Aprende de ellos.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum sit amet purus a posuere.
                </p>
              </div>
            </div>
        </section>
      </div>
    )
  }
}

class PhysicalWeb extends Component {
  render(){
    return(
      <div className="parallax">
        <section className="web-info">
          <h3>Physical Web</h3>
          <p>La Web física es un enfoque abierto para permitir interacciones rápidas y fluidas con objetos físicos y ubicaciones.</p>
          <a href="#">Quiero saber más</a>
        </section>
      </div>
    )
  }
}

class Analytics extends Component{
  render(){
    return(
      <div>
        <section className="section-steps">
          <div className="row">
            <h2>¡Analytics en tiempo real!</h2>
          </div>
          <div className="row">
            <div className="col span_1_of_2 steps-box">
              <img src={mac} alt="bebat web app on Mac" className="app-screen"/>
            </div>
            <div className="col span_2_of_2 steps-box">
              <div className="works-step">
                <div>ɱ</div>
                <p>Lorem ipsum men jusls ipsun alesum demakilo.Lorem ipsum men jusls ipsun alesum demakilo.</p>
              </div>
              <div className="works-step">
                <div>ɮ</div>
                <p>Lorem ipsum men jusls ipsun alesum demakilo.Lorem ipsum men jusls ipsun alesum demakilo.</p>
              </div>
              <div className="works-step">
                <div>ɲ</div>
                <p>Lorem ipsum men jusls ipsun alesum demakilo.Lorem ipsum men jusls ipsun alesum demakilo.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

class Contact extends Component {
  render(){
    return(
      <div>
        <section className="section-form">
          <div className="row">
            <h2>Contáctanos</h2>
          </div>
          <div className="row">
            <form method="post" action="#" className="contact-form">
              <div className="row">
                <div className="col span_1_of_3">
                  <label for="nombre">Nombre:</label>
                </div>
                <div className="col span_2_of_3">
                  <input type="text" name="nombre" id="nombre" placeholder="Ex. Jorge Perez Lopez" required/>
                </div>
              </div>
              <div className="row">
                <div className="col span_1_of_3">
                  <label for="email">Email:</label>
                </div>
                <div className="col span_2_of_3">
                  <input type="email" name="email" id="email" placeholder="Ex. Jperez@bebat.com" required/>
                </div>
              </div>
              <div className="row">
                <div className="col span_1_of_3">
                  <label for="find-us">¿Como nos encontraste?</label>
                </div>
                <div className="col span_2_of_3">
                  <select name="find-us" id="find-us">
                    <option value="amigos" selected>Amigos</option>
                    <option value="search">Motor de busqueda(Google, Yahoo, etc.)</option>
                    <option value="ad">Anuncio</option>
                    <option value="social">Redes sociales</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col span_1_of_3">
                  <label for="message">Escribenos</label>
                </div>
                <div className="col span_2_of_3">
                  <textarea name="message" placeholder="Su mensaje"/>
                </div>
              </div>
              <div className="row">
                <div className="col span_1_of_3">
                  <label>&nbsp;</label>
                </div>
                <div className="col span_2_of_3">
                  <input type="submit" name="news" value="Enviar"/>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    )
  }
}

class Footer extends Component {
  render(){
    return(
      <div>
        <footer className="clearfix">
          <div className="row">
            <div className="col span_1_of_2">
              <ul className="footer-nav">
                <li><a href="#">| Home |</a></li>
                <li><a href="#">| Nosotros</a></li>
                <li><a href="#">| ¿Como funciona?</a></li>
                <li><a href="#">| Comenzar |</a></li>
              </ul>
            </div>
            <div className="col span_2_of_2">
              <ul className="social-links">
                <li><a href="#"><FaFacebook/></a></li>
                <li><a href="#"><FaTwitter/></a></li>
                <li><a href="#"><FaGooglePlus/></a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <p>
              Copyright &copy; 2018 by BeBat. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SectionWhy />
        <PhysicalWeb/>
        <Analytics />
        <Contact/>
        <Footer/>

      </div>
    );
  }
}

export default App;
