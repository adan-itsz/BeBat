import React, { Component,PropTypes } from 'react';
import './login.css';


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
          <h4 className="modal-title" id="myModalLabel">Login</h4>
        </div>

        <div className="modal-body">
        <form className="form-horizontal" role="form">
                     <div class="form-group">

                       <div class="col-sm-10">
                           <input type="email" 
                           id="inputEmail3" placeholder="Email"/>
                       </div>
                     </div>
                     <div class="form-group">
                       <div class="col-sm-10">
                           <input type="password" class="form-control"
                               id="inputPassword3" placeholder="Password"/>
                       </div>
                     </div>
                     <div class="form-group">
                       <div className="icn">

                         <p id="icono"><span className="icon icon--info">?</span><a href="#">Forgot Password</a></p>

                       </div>
                     </div>
                     <div class="form-group">
                       <div class="col-sm-offset-2 col-sm-10">
                         <button id="sign" type="submit" class="btn btn-default">Sign in</button>
                       </div>
                     </div>
                   </form>



        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary">Register</button>
        </div>

      </div>
    </div>
  </div>
          </div>

        );
    }
}


export default Login;
