import React, { Component,PropTypes } from 'react';
import './App.css';
import SideBar from './nav.js';
import hablemos from './hablemos.png';

class App extends React.Component {
    render() {

        return (
          <div id="encabezado">
            <div className="container-fluid">
                <SideBar />
                {this.props.children}
            </div>
            <img id="portada"src="https://jumpingtalent.universia.es/wp-content/uploads/2017/02/office-writing.jpg"/>
            <img id="logo" src="hablemos.png"/>
          </div>

        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
