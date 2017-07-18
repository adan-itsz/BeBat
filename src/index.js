import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './index2.js'
import Nosotros from './nosotros.js'
import Login from './login.js';

import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Main = () =>(
  <MuiThemeProvider>
    <App2 />
  </MuiThemeProvider>
)

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
