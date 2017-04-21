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
          <h4 className="modal-title" id="myModalLabel">Ingresar</h4>
        </div>

        <div className="modal-body">
        <form onSubmit={this.props.ingreso} className="form-horizontal" role="form">
                     <div class="form-group">

                       <div class="col-sm-10">
                           <input type="email"
                           id="inputEmail3" name='email' placeholder="Email" required/>
                       </div>
                     </div>
                     <div class="form-group">
                       <div class="col-sm-10">
                           <input type="password" name='pass'class="form-control"
                               id="inputPassword3" placeholder="Password" required/>
                       </div>
                     </div>
                     <div class="form-group">
                       <div className="icn">

                         <p id="icono"><span className="icon icon--info">?</span><a id= "olvidar"href="#">Olvidaste tu password?</a></p>

                       </div>
                     </div>
                     <div class="form-group">
                       <div class="col-sm-offset-2 col-sm-10">
                         <button id="sign" type="submit" class="btn btn-default">Entrar</button>
                       </div>
                     </div>
                   </form>



        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary">Registrar</button>
        </div>

      </div>
    </div>
  </div>
          </div>

        );
    }
}


export default Login;
