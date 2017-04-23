import React, {Component,PropTypes} from 'react';

import {stack as Menu} from 'react-burger-menu';
import Nosotros from './nosotros.js'
import './App.css';

class SideBar extends React.Component {
  constructor (props) {
  super(props)
  this.state = {
    menuOpen: false
  }
}

handleStateChange (state) {
  this.setState({menuOpen: state.isOpen})
}

handleItemClick () {
  this.setState({menuOpen: false})
}
    render() {
        return (
          <Menu right width='100%' isOpen={this.state.menuOpen} onStateChange={this.handleStateChange}>
           <a onClick={() => this.handleItemClick()} id="home"  className="menu-item" href="#encabezado">Home</a>
          <a onClick={() => this.handleItemClick()} id="about" className="menu-item" href="#seccion-nosotros"> Nosotros</a>
          <a onClick={() => this.handleItemClick()} id="contact" className="menu-item" href="#seccion-funciona">Servicios</a>
          <a onClick={() => this.handleItemClick()} className="menu-item--small" href="#seccion-registro">Comienza</a>
        </Menu>
        );
    }
}
export default SideBar;
