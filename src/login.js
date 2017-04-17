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
          <h4 className="modal-title" id="myModalLabel">Modal title</h4>
        </div>

        <div className="modal-body">
        <form class="form-horizontal" role="form">
                     <div class="form-group">
                       <label  class="col-sm-2 control-label"
                                 for="inputEmail3">Email</label>
                       <div class="col-sm-10">
                           <input type="email" class="form-control"
                           id="inputEmail3" placeholder="Email"/>
                       </div>
                     </div>
                     <div class="form-group">
                       <label class="col-sm-2 control-label"
                             for="inputPassword3" >Password</label>
                       <div class="col-sm-10">
                           <input type="password" class="form-control"
                               id="inputPassword3" placeholder="Password"/>
                       </div>
                     </div>
                     <div class="form-group">
                       <div class="col-sm-offset-2 col-sm-10">
                         <div class="checkbox">
                           <label>
                               <input type="checkbox"/> Remember me
                           </label>
                         </div>
                       </div>
                     </div>
                     <div class="form-group">
                       <div class="col-sm-offset-2 col-sm-10">
                         <button type="submit" class="btn btn-default">Sign in</button>
                       </div>
                     </div>
                   </form>


                   
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
