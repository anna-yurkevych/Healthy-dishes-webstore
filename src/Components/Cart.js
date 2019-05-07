import React, { Component } from 'react';
import {connect}   from 'react-redux';

import {AddToCart} from '../Actions/AddToCart.js';
import {RemoveFromCart} from '../Actions/RemoveFromCart.js';
import { mapStateToProps } from '../Actions/Redux.js';



class CartItem extends Component {
	render (){
		return (<>
                 <li className="list-group-item d-flex justify-content-between align-items-center">
				    <img src={this.props.src} className = "cart-img" alt={this.props.alt} />
				    {this.props.title}
				    <span className="badge badge-pill num-of-dish">
				      {this.props.number}
				    </span>
				    <span className="price-in-cart">
				      {this.props.price}
				    </span>
				    <button type = 'button' onClick ={this.props.plusNum} className="plus-minus">
				      <i className="fas fa-plus"></i>
				    </button>
				    <button type = 'button' onClick ={this.props.minNum} className="plus-minus">
				      <i className="fas fa-minus"></i>
				    </button>
				  </li> 
				</>
			)
	}
}
//

class _Cart extends Component {
  constructor (props){
    super (props);
    this.cartArray = this.props.cartArray;
  }

  render () {
  	var totalPrice = 0;
  	this.props.cartArray.forEach((item, index, array) => {
		totalPrice+=item.number*item.price
       }
     )

    console.log("this.props.cartArray", this.props.cartArray);
    if (totalPrice === 0){
    	return (
    		    <div className = "cart-is-empty cart-title" >
  		          <h2 className="text-center" style = {{marginBottom: "5%"}} >Your Cart is empty</h2>  
  		             <div className = "mx-auto" style={{width: "15%"}}>		              
	  		          <a href="/" >
	  		            <button type="button" className="col btn btn-add-to-cart" >
						          To Main Page
					    </button>
					  </a>
					</div>
  		        </div>

    		)
    }
  	return (<div className = "cart-title" >
  		      <h2 className="text-center">Your Cart</h2>
  		      <ul className="list-group cart-list" >
  		      {//
  		      	this.cartArray.map((item, index, array) => (
				  <CartItem title = {item.title}
				            number = {item.number}//{this.props.cartArray[index].number}
				            src = {item.src}
				            price = {item.price+' $'}
				            key = {index}
				            plusNum = {() => {
				            	               AddToCart (item, array, index);
				            	               this.forceUpdate();
				            	           }
				            	       }
				            minNum = {() => {
				            	               RemoveFromCart(item, array, index);
				            	               this.forceUpdate();
				            	           }
				            	       }
				            />
				   )
  		      	)
			  }
				  <span className="badge badge-pill total-price text-right">
				      Total Price: {totalPrice} $
				  </span>
				  <div className = "mx-auto" style={{width: "15%"}}>		              
	  		          <a href="/checkout" >
	  		            <button type="button" className="col btn btn-add-to-cart" >
						          Pay
					    </button>
					  </a>
			      </div>
				</ul>
				
			</div>
    )
  }
}
//
let Cart = connect (mapStateToProps)(_Cart)

export {Cart}