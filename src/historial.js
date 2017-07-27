import React, { Component } from 'react';
import "./App.css"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase'
import { ref } from './constants.js'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import './historial.css';
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"



class PromoSlide extends Component {
  constructor(props) {
    super(props)

    let recibirArray;
    recibirArray = props.urlImagenes;
    var StringN = " ";
    var ArrayFg = [];
    for (var i = 0; i < recibirArray.length; i++) {
            if(recibirArray[i] =='~'){
              for (var j = i+1; j < recibirArray.length; j++) {
                if(recibirArray[j]!='~'){
                  StringN += recibirArray.substring(j,j+1);
                }
                else if (recibirArray[j]=='~'&&j!=0||j+1==recibirArray.length) {
                  ArrayFg = ArrayFg.concat({original:StringN});

                  StringN="";
                }
              }
              if(j==recibirArray.length){
                ArrayFg = ArrayFg.concat({original:StringN});
                break;
              }
            }
          }
      this.state={
        arrayActual:ArrayFg,
      }
  }

  recortarCadenas(correo){
    let remplazo = correo.split('.').join('-');
    return remplazo;
  }

  componentWillMount(){

  }

  render(){
    return(
      <div id='historial-image-gallery'>
        <ImageGallery
                items={this.state.arrayActual}
                slideInterval={5000}
                showThumbnails={false}
                showBullets={true}
                autoPlay={true}
                showPlayButton={false}
                showFullscreenButton={false}
                onImageLoad={this.handleImageLoad}/>
      </div>
    )
  }

}

class Cards extends Component{
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div>
      {this.props.historial.map((dato, i) =>
        <Card key={i}>
         <CardHeader
           title={
             <h4><strong>Nombre: </strong>{this.props.historial[i].nombreSlide}</h4>
           }
           subtitle={
             <div>
               <h5><strong>Notas: </strong>{this.props.historial[i].notas}</h5>
               <h5><strong>Fecha Subida: </strong>{this.props.historial[i].fecha}</h5>
             </div>
           }
           actAsExpander={true}
           showExpandableButton={true}
         />
         <CardActions>
           <FlatButton label="Hacer Activo" onClick={()=>this.props.onUpdate(
                                                                              this.props.historial[i].nombreSlide,
                                                                              this.props.historial[i].notas,
                                                                              this.props.historial[i].fecha,
                                                                              this.props.historial[i].historial
                                                                            )}/>
           <FlatButton label="Eliminar" onClick={()=>this.props.onDelete(this.props.keys[i],i)}/>
         </CardActions>
         <CardText expandable={true}>
           <PromoSlide urlImagenes={this.props.historial[i].historial}/>
         </CardText>
        </Card>
      )}
      </div>
    )
  }
}

class HistorialPromos extends Component{
    constructor(){
      super();
    }

  componentWillMount(){
    var user = firebase.auth().currentUser;
    var remplazo=`${user.email}`.split('.').join('-');
    var refHistorial=ref.child(remplazo+"/Historial");
    let self = this;
    let array = [];
    let arrayKeys = [];

    this.state = {
      selected: [],
      arregloHistorial:[],
      arregloHistorialKey:[]
    };

    var promise = new Promise(
      function(resolve,reject){
        refHistorial.on("value", snapshot =>{
          snapshot.forEach(function(child){
            resolve(
              array = array.concat(child.val()),
              arrayKeys = arrayKeys.concat(child.key)
            )
          })
        });
      }
    )
    promise.then(
      function(){
        self.setState({
            arregloHistorial: array,
            arregloHistorialKey: arrayKeys
        });

      }
    )
  }

  onDelete(id,key){
    var user = firebase.auth().currentUser;
    var remplazo=`${user.email}`.split('.').join('-');
    var refHistorial=ref.child(remplazo+"/Historial/" + id);
    var array=this.state.arregloHistorial;
    var arregloFile=this.state.arregloHistorialKey;

    array.splice(key,1);
    arregloFile.splice(key,1);
    this.setState({
      arregloHistorial:array,
      arregloHistorialKey:arregloFile,
    })
    refHistorial.remove();

    
  }

  onUpdate(nombre,notas,fecha,url){
    var user = firebase.auth().currentUser;
    var remplazo=`${user.email}`.split('.').join('-');
    var refHistorial=ref.child(remplazo+"/SlideActual");
    refHistorial.update({
      fecha: fecha,
      nombreSlide: nombre,
      notas: notas,
      slideActual: url,
    })
    alert("Actualizado");
  }

  render(){
    let data = this.state;
    return(
        <div id="historial">
          <Cards historial={data.arregloHistorial} onDelete={this.onDelete.bind(this)} onUpdate={this.onUpdate.bind(this)}keys={data.arregloHistorialKey}/>
       </div>
    );
  }
}
export default HistorialPromos;
