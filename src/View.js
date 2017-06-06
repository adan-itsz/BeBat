import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './promoActiva.css';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import { ref } from './constants.js'
import * as firebase from 'firebase'



class View extends Component {

    render() {
      return(
        <Router>
      <div>
        <Route path="/View/:id" component={Child}/>
      </div>
    </Router>
      )
    }
}

var arreglo=[];
class CaroucelArray extends Component{
  render(){
    return(
      <div className="itemCaroucel">
        <img src={this.props.url}/>
      </div>
    );
  }
}

class Child extends Component {
  constructor({match}){
    super()
      this.state={
        arrayActual:["https://firebasestorage.googleapis.com/v0/b/bebat-d9540.appspot.com/o/imagenes-administrador%2FIMG_3405.jpg?alt=media&token=0c6b6585-96d6-4c56-a6c8-628483678623"],
        user:`${match.params.id}`
      }

    }
      componentWillMount(){
        var recibirArray;

     var refDB=ref.child(this.state.user+"/SlideActual");
     refDB.on('value', snapshot=> {
       recibirArray=snapshot.val().slideActual;
     var StringN="";
     var ArrayFg=[];
     for (var i = 0; i < recibirArray.length; i++) {
         if(recibirArray[i] =='~'){
           for (var j = i+1; j <= recibirArray.length; j++) {
             if(recibirArray[j]!='~'){
               StringN += recibirArray.substring(j,j+1);
             }
             else if (recibirArray[j]=='~'||recibirArray[j+1]===null&&j!=0) {
               ArrayFg.push(StringN);
               StringN="";

             }
           }
         }

       }
     this.setState({
       arrayActual:ArrayFg
     })
     }  );
  }




onSelect= (active,direction)=>{
    console.log(`active=${active} && direction=${direction}`);
}
render() {

  return(
    <div>
    <div id="carousel-main">
    <div style={{ margin:20}}>
      <React_Bootstrap_Carousel
        animation={true}
        onSelect={this.onSelect}
        className="carousel-fade"
      >
      {this.state.arrayActual.map(listaImgs=>{
        return (<CaroucelArray url={listaImgs}/>);})
      }
      </React_Bootstrap_Carousel>
    </div>
    </div>
    </div>
  )
}
}



export default View;
