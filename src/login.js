import React, { Component,PropTypes } from 'react';
import './App.css';

class Login extends React.Component {
    render() {

        return (
          <div>
  <button type="button" id='ingresar' data-toggle="modal" data-target="#myModal">
    Ingresar
  </button>

  <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
          <h4 className="modal-title" id="myModalLabel">Modal title</h4>
        </div>
        <div className="modal-body">
          ...
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
          </div>

        );
    }
}


export default Login;
