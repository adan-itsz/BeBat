import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './promoActiva.css';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import * as firebase from 'firebase'
import { ref } from './constants.js'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

var arreglo=[];

const styleCarousel = {
  backgroundColor:'black',
}


class PromoActiva extends Component {
      constructor(){
        super()
          this.state={
            arrayActual:["https://firebasestorage.googleapis.com/v0/b/bebat-d9540.appspot.com/o/imagenes-administrador%2FIMG_3405.jpg?alt=media&token=0c6b6585-96d6-4c56-a6c8-628483678623"]
          }
        }
        recortarCadenas(correo){
          var remplazo=correo.split('.').join('-');
          return remplazo;
        }
          componentWillMount(){
          var recibirArray;
        var user = firebase.auth().currentUser;
        var remplazo=`${user.email}`.split('.').join('-');

        var refDB=ref.child(remplazo+"/SlideActual");
        refDB.on('value', snapshot=> {
          recibirArray=snapshot.val().slideActual;
        var StringN="";
        var ArrayFg=[];
        for (var i = 0; i < recibirArray.length; i++) {
            if(recibirArray[i] =='~'){
              for (var j = i+1; j < recibirArray.length; j++) {
                if(recibirArray[j]!='~'){
                  StringN += recibirArray.substring(j,j+1);
                }
                else if (recibirArray[j]=='~'&&j!=0||j+1==recibirArray.length) {
                  ArrayFg.push(StringN);
                  StringN="";
                }
              }
              if(j==recibirArray.length){
                ArrayFg.push(StringN);
                break;
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
      const images = [
        {
          original:this.state.arrayActual[0],
        },
        {
          original:this.state.arrayActual[1],
        },
        {
          original:this.state.arrayActual[2]
        }

      ]
      return(
        <div>
          <div id="carousel-main">
            <div style={{ margin:20}}>
              <ImageGallery
                style={styleCarousel}
                items={images}
                slideInterval={5000}
                showThumbnails={false}
                showBullets={true}
                autoPlay={true}
                showPlayButton={false}
                showFullscreenButton={false}
                onImageLoad={this.handleImageLoad}/>
                <h1 id='promocion-actual-text'>PROMOCIONES ACTUALES</h1>
            </div>
          </div>
        </div>
      )
    }


}


export default PromoActiva;
