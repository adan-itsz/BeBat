import React, { Component,PropTypes } from 'react';
import config from './login.js'
import * as firebase from 'firebase';
import { ref, firebaseAuth } from './constants.js'

class AppWeb extends React.Component {
    render() {
        return (
          <div id="servi">
          <a onClick={() => this.handleItemClick(firebaseAuth().signOut() )} href="/">Salir</a>
              <h1>estas en la App</h1>
          </div>
        );
    }
}

export default AppWeb;
