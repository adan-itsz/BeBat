import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import * as firebase from 'firebase'
import './subirPromo.css';
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
       arreglo:[]
    }
    this.agregarImagenes=this.agregarImagenes.bind(this);
  }
  agregarImagenes(a){
    alert(a)
       if(a!=null){
         this.setState({
             picture: a,
           arreglo:this.state.arreglo.concat([{url:this.state.picture}])});
      }
     }

handleOnChange (event) {
      const file = event.target.files[0]
      const storageRef = firebase.storage().ref(`pictures/${file.name}`)
      const task = storageRef.put(file)

         task.on('state_changed', snapshot => {
            let per = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            this.setState({
               uploadStatus : per
            })
         }, (error) => {
            this.setState({
               message : `Alert!, ${error.message}`
            })
         }, () => {
            this.setState({
               message : 'File Uploaded!',
               picture : task.snapshot.downloadURL
            }),
        	this.agregarImagenes(this.state.picture)
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
