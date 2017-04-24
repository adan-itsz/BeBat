import React, { Component,PropTypes } from 'react';
import './App.css';
import './servicios.css'
import Broadcast from 'react-icons/lib/go/broadcast'
import Rigth from 'react-icons/lib/ti/chevron-right-outline'
import Left from 'react-icons/lib/ti/chevron-left-outline'

function Cambio(props){
  return(
    <h2>Hey!{props.name}</h2>
  );
}

class PrimeraImagen extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      showComponent:false
    }
    this.onClickLink = this.onClickLink.bind(this);
  }
  onClickLink(){
    this.setState({showComponent:!this.state.showComponent});
  }

  render(){
    let tile = null;
    if(this.state.showComponent === true){
      tile = <OtroLado />
    }else{
      tile =<SegundaImagen />
    }
    return(
      <div>
        <div className="tile" id="tileOne">
          <div className="textWrapper">
            <a onClick={this.onClickLink} ><div className="btnservice">Ipsum</div></a>
          </div>
        </div>
        {tile}
      </div>
    );
  }
}

class SegundaImagen extends React.Component{
  render(){
    return(
      <div className="tile" id="tileTwo">
      <div className="textWrapper">
        <a href="#"><div className="btnservice">Ipsum</div></a>
      </div>
      </div>
    );
  }
}

class OtroLado extends React.Component{
  render(){
    return(
      <div className="tile" id="tileBack">
        <div className="textWrapper">
        <div id ="puntos">
          <Broadcast id="broadcast-icon" />
          <p><Rigth />Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
           <p><Rigth />Aenean commodo ligula eget dolor.</p>
           <p><Rigth />Aenean massa.</p>
           <p><Rigth />Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        </div>
      </div>
    )
  }
}

class Servicios extends React.Component {


    render() {
        return (
        		<div id="servi">
              <div className="imageGrid">
                <PrimeraImagen />
              </div>
        		</div>
        );
    }
}

export default Servicios;
