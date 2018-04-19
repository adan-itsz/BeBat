import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App2 from './index2.js'

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
