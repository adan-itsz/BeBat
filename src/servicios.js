import React, { Component,PropTypes } from 'react';
import './App.css';
import './servicios.css'
import Broadcast from 'react-icons/lib/go/broadcast'
import Rigth from 'react-icons/lib/ti/chevron-right-outline'
import Left from 'react-icons/lib/ti/chevron-left-outline'



class PrimeraImagen extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      showComponent:false,
      name:'tileOne'
    }
    this.onClickLink = this.onClickLink.bind(this);
  }
  onClickLink(){
    this.setState({
      showComponent:!this.state.showComponent,
      name:'tileBack'
    });
  }

  render(){
    let isClicked = this.state.showComponent;
    let tile = null;
    if(isClicked){
      tile = <OtroLado />
    }
    else{
      tile =
          <div className="textWrapper">
            <a onClick={this.onClickLink} ><div className="btnservice">Ipsum</div></a>
          </div>
    }
    return(
      <div className="tile" id={this.state.name}>
        {tile}
      </div>
    );
  }
}

class SegundaImagen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showComponent: false,
      name: 'tileTwo'
    }
    this.onClickLink = this.onClickLink.bind(this);
  }
  onClickLink(){
    this.setState({
      showComponent:!this.state.showComponent,
      name: 'tileBack'
    });
  }
  render(){
    let isClicked = this.state.showComponent;
    let tile = null;
    if(isClicked){
      tile = <OtroLado />
    }else {
      tile =
        <div className="textWrapper">
          <a onClick={this.onClickLink}><div className="btnservice">Ipsum</div></a>
        </div>

    }
    return(
      <div className ="tile" id={this.state.name}>
        {tile}
      </div>
    );
  }
}

class OtroLado extends React.Component{
  render(){
    return(
        <div className="textWrapper">
        <div id ="puntos">
          <Broadcast id="broadcast-icon" />
          <p><Rigth />Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
           <p><Rigth />Aenean commodo ligula eget dolor.</p>
           <p><Rigth />Aenean massa.</p>
           <p><Rigth />Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        </div>
    )
  }
}

class Servicios extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      let tileOne = <PrimeraImagen />
      let tileTwo = <SegundaImagen />
        return (
        		<div id="servi">
              <div className="imageGrid">
                {tileOne}
                {tileTwo}
              </div>
        		</div>
        );
    }
}

export default Servicios;
