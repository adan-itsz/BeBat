import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Registro from './registrarse.js'
import App from './App'
import AppWeb from './AppWeb'
import Nosotros from './nosotros.js'
import Login from './login'

import * as firebase from 'firebase';
import './login.css';




function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login' , state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/AppWeb' />}
    />
  )
}

export default class App2 extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {

    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        alert("Se autentifico")
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {

    return this.state.loading === true ? <h1>Loading</h1> : (
          <BrowserRouter>

                  <Switch>
                <Route path='/' exact component={App} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PrivateRoute authed={this.state.authed} path='/AppWeb' component={AppWeb} />
                <Route render={() => <h3>Uups! algo paso mal :D</h3>} />
              </Switch>

      </BrowserRouter>

    );
  }
}
