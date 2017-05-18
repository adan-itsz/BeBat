import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import * as firebase from 'firebase'
import './subirPromo.css';
const x="https://designcode.io/images/bg/footer.jpg";
var cantidadFlayers=0;
class Promo extends Component{
  render(){
    return(
      <li> <img src={this.props.p}/></li>
    );
  }
}

class SubirPromo extends Component {
  constructor(){
    super();
    this.state={
      uploadStatus:0,

      arreglo:[{url:""},]
    }
   this.agregarImagenes=this.agregarImagenes.bind(this);
  }

  agregarImagenes(a){
       if(a!=null){
         this.setState({
             picture: a,
           arreglo:this.state.arreglo.concat([{url:this.state.picture}])});
       }
     }
handleOnChange(event){
const file= event.target.files[0];
const storageRef = firebase.storage().ref(`fotos/${file.name}`);
const task = storageRef.put(file);
task.on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({
        uploadStatus: percentage,

      }),

      (error) => {
      console.error(error.message)
    },
    this.agregarImagenes(task.snapshot.downloadUR)
  })


  }


  render() {

    return (
      <div>
      <progress value={this.state.uploadStatus} max="100">
        {this.state.uploadStatus}%
      </progress>

      <input type='file' onChange={this.handleOnChange.bind(this)}/>
      <div id='gallery'>
      <ul>
      {this.state.arreglo.map(listaImgs=>{
        return (<Promo p={listaImgs.url}/>);})
      }
      </ul>

      </div>

      </div>

    );
  }


}

export default SubirPromo;
