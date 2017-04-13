import React, {Component,PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {stack as Menu} from 'react-burger-menu';
import Nosotros from './nosotros.js'
import './App.css';

class SideBar extends React.Component {

    render() {
        return (
          <Menu right width='100%'>
          <a id="home" className="menu-item" href="#" >Home</a>
          <a id="about" className="menu-item" href="#seccion-nosotros">Nosotros</a>
          <a id="contact" className="menu-item" href="#">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="#">Settings</a>
        </Menu>
        );
    }
}
export default SideBar;
