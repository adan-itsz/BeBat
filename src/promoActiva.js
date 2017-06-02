import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './promoActiva.css';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import * as firebase from 'firebase'
import { ref } from './constants.js'

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
class PromoActiva extends Component {
  constructor(props) {
        super(props)
          this.separarCadena=this.separarCadena.bind(this);
          var recibirArray;
        var user = firebase.auth().currentUser;
        var refDB=ref.child("adan1995a@gmail-com"+"/SlideActual");
        refDB.on('value', snapshot=> {
          recibirArray=snapshot.val().slideActual;
          alert(recibirArray);
        //  this.separarCadena(this.recibirArray);
        var StringN="";
        var ArrayFg=[];
        for (var i = 0; i < recibirArray.length; i++) {
          if(recibirArray[i] =='~'){

            for (var j = i+1; j < recibirArray.length; j++) {
              if(recibirArray[j]!='~'){
                StringN += recibirArray.substring(j,j+1);
              }
              else if (recibirArray[j]=='~') {
                ArrayFg.push(StringN);
                StringN="";

              }
            }

          }
        }
        this.setState({
          arrayActual:this.ArrayFg
        })
        }  );





    }


    onSelect= (active,direction)=>{
        console.log(`active=${active} && direction=${direction}`);
    }

    separarCadena(a){
      var StringN;
      var ArrayFg;
      for (var i = 0; i < a.length; i++) {
        if(a[i] =='~'){

          for (var j = i; j < a.length; j++) {
            if(a[j]!='~'){
              StringN += a.substring(j,j+1);
            }
            else if (a[j]=='~') {
              ArrayFg.push(StringN);

            }
          }

        }
      }
      this.setState({
        arrayActual:this.ArrayFg
      })
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
        <h1>Tu slide actual</h1>
        </div>
      )
    }


}


export default PromoActiva;
