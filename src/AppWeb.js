import React, { Component,PropTypes } from 'react';
import config from './login.js'
import * as firebase from 'firebase';
import { ref, firebaseAuth } from './constants.js'
import ApplicacionWeb from './ApplicacionWeb'
class AppWeb extends React.Component {
    render() {
        return (
          <div id="servi">
              <ApplicacionWeb/>
          </div>
        );
    }
}

export default AppWeb;
