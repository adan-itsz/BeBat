import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './promoActiva.css';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';


class PromoActiva extends Component {
  constructor(props) {
        super(props);
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

            <div className="itemCaroucel">
              <img src="https://source.unsplash.com/w4wvdAvdQhE/1600x900"/>
            </div>
            <div className="itemCaroucel" >
                <img src="https://source.unsplash.com/FB6vPHbTo7I/1600x900"/>
            </div>
            <div className="itemCaroucel">
              <img src="https://source.unsplash.com/M-fA89yvx2I/1600x900"/>
            </div>

          </React_Bootstrap_Carousel>
        </div>
        </div>
        <h1>Tu slide actual</h1>
        </div>
      )
    }


}


export default PromoActiva;
