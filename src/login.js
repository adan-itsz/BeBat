import React, { Component,PropTypes } from 'react';
import './login.css';
import { ref, firebaseAuth } from './constants.js'


class Login extends React.Component {

  handleSubmit = (e) => {
   e.preventDefault()
   firebaseAuth().signInWithEmailAndPassword(this.email.value,this.pw.value)
     .catch(function(error) {
       var errorCode = error.code;
       var errorMessage = error.message;
       if (errorCode === 'auth/wrong-password') {

               alert('contraseña incorrecta');

           }
       else if(errorCode==='auth/user-not-found'){
             alert('Usuario inexistente');
       }
           else {
                   alert(errorMessage);
                 }
                 console.log(error);
                 this.setState({
                   contador: this.state.contador +=1,

                 })
 });

 }

 Recuperar(){
  firebaseAuth.sendPasswordResetEmail(this.email.value).then(function() {
}, function(error) {
});
 }

    render() {

        return (

      <div className="modal-dialog">

        <div className="modal-content">
          <div className="modal-header">
            <a type="button" href="/" className="close" ><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></a>
            <h4 className="modal-title" id="myModalLabel">Ingresar</h4>
          </div>

          <div className="modal-body">
       <form onSubmit={this.handleSubmit}  role="form">
         <div className="form-group">
           <label>Email</label>
           <input  id="inputEmail3" name='email' ref={(email) => this.email = email} placeholder="Email" required/>
         </div>
         <div className="form-group">
           <label>Password</label>
           <input  name='pass' id="inputPassword3" placeholder="Password" type="password" ref={(pw) => this.pw = pw} required/>
         </div>
         <div className="icn">
                        <p id="icono"><span className="icon icon--info">?</span><a id= "olvidar" onClick={this.Recuperar} >Olvidaste tu password?</a></p>
                      </div>

         <button type="submit" id="btnLogin" className="btn btn-primary">Login</button>
       </form>
     </div>

     </div>
</div>


        );
    }
}


export default Login;
