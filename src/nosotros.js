import React, { Component,PropTypes } from 'react';
import './nosotros.css';
import celular from './celphoneBat.png'

class Nosotros extends React.Component {
    render() {
        return (
          <div id="nos">
          <h1>Nosotros</h1>
          <div id='nosotros-content'>
             <img id='nosotros-celular' src={celular}/>
             <div id='nosotros-parrafos'>
             <p className='nosotros-parrafo'> Somos una empresa dedicada
                 a cambiar la manera en la que
                 los consumidores <span className='nosotros-color'>interactuan </span>
                 con las marcas, abriendo paso
                 a la era del <span className='nosotros-color'>Physical Web</span>.
              </p>
              <p className='nosotros-parrafo'>
                Creemos que la tecnología beacon tiene
                el <span className='nosotros-color'>potencial</span> de hacer mucho, mucho más, para
                 los consumidores, las marcas y los <span className='nosotros-color'>vendedores</span>.
               </p>
              </div>
           </div>
          </div>

        );
    }
}

export default Nosotros;
