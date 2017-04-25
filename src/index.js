import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nosotros from './nosotros.js'
import Login from './login.js';

import './index.css';
import {
  BrowserRouter as Router,
  Route,browserHistory,IndexRoute
} from 'react-router-dom'

class AppStart extends React.Component{

render(){
  return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/Nosotros" component={Nosotros} />
          <IndexRoute component={App}/>
        </Route>
      </Router>
  );
}
}

ReactDOM.render(
  <AppStart />,
  document.getElementById('root')
);
