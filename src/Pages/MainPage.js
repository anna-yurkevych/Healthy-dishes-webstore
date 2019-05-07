import React, { Component } from 'react';

import {Carousel} from '../Components/Carousel.js';
import {MainCards} from '../Components/MainCards.js';
import {CartAlert} from '../Components/CartAlert';


class Main extends Component {
  render() {
    return (<>
      < CartAlert />
      <div>
        
        <Carousel/> 
	        <div style = {{overflow: "hidden", margin: "2%"}}>
	          <MainCards />   
	        </div> 
      </div>
      </>
    );
  }
}

export {Main}