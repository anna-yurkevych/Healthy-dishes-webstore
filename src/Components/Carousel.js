import React, { Component } from 'react';
import {connect}   from 'react-redux';

import { AddToCart } from '../Actions/AddToCart.js';
import { mapStateToProps } from '../Actions/Redux.js';
import {AllDishes} from '../Data/AllDishes.js';


import {handleClickTrue} from './CartAlert';


class CarouselItem extends Component {
   constructor (props){
   	super (props);
   	this.state = {};
   }

   render (){
   	return (
          <div className={this.props.className} style={{zIndex: 0}}>

	        <img src={this.props.img} className="d-block w-100" alt="Healthy food" />
	        
	        <div className="carousel-caption d-none d-md-block mx-auto"
	             style={{background: "rgba(43, 192, 22, 0.85)",
	                     borderRadius: "5px",
	                     width: "50%"}}>
	          
		          <h4>Daily specials</h4>
		         
		          <p>{this.props.specTitle}</p>

			      <button type="button" className="btn btn-add-to-cart"
					      item={this.props.item}
					      cart = {this.props.cart}
					      onClick = {() => {
					       	          AddToCart(this.props.item, this.props.cart);
					       	          handleClickTrue();
					       	      }
					       } >
					Add to Cart
			      </button>

	        </div>

	      </div>

   	)
   }

}
//


class _Carousel extends Component {
	render(){
		return (
                 <div className="bd-example nav-margin" >
				  <div id="carouselCaptions" className="carousel slide" data-ride="carousel">
				    <ol className="carousel-indicators">
				      <li data-target="#carouselCaptions" data-slide-to="0" className="active"></li>
				      <li data-target="#carouselCaptions" data-slide-to="1"></li>
				      <li data-target="#carouselCaptions" data-slide-to="2"></li>
				    </ol>
				    
				    <div className="carousel-inner">

				      <CarouselItem 
				       className="carousel-item active"
				       img = "/images/healthy-food1.jpg"
				       specTitle = "Vegetable salad costs only 6$" 
				       item={AllDishes.salads[2]}
				       cart = {this.props.cartArray} />

				      <CarouselItem 
				       className="carousel-item"
				       img = "/images/healthy-food2.jpg"
				       specTitle = "Buckwheat with vegetables costs only 7$"
				       item={AllDishes.mains[0]}
				       cart = {this.props.cartArray} />

				      <CarouselItem 
				       className="carousel-item"
				       img = "/images/healthy-food3.jpg"
				       specTitle = "Chickpeas with pumpkin only for 8.5$"
				       item={AllDishes.mains[1]}
				       cart = {this.props.cartArray} />
				    
				    </div>
				    
				    <a className="carousel-control-prev" href="#carouselCaptions" role="button" data-slide="prev">
				      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				      <span className="sr-only">Previous</span>
				    </a>

				    <a className="carousel-control-next" href="#carouselCaptions" role="button" data-slide="next">
				      <span className="carousel-control-next-icon" aria-hidden="true"></span>
				      <span className="sr-only">Next</span>
				    </a>
				    
				  </div>
				</div>
	)
	}
}
//
let Carousel = connect (mapStateToProps)(_Carousel)


export {Carousel}