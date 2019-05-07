import React, { Component } from 'react';
import {connect}   from 'react-redux';

import { handleSearch } from '../Actions/handleSearch.js'
import {CartAlert, handleClickTrue} from '../Components/CartAlert';
import {AddToCart} from '../Actions/AddToCart.js';
import {Card} from '../Components/Card.js';
import { mapStateToProps } from '../Actions/Redux.js';



class _Search extends Component {

  render (){
  	console.log ("this.props.searchDishes", this.props.searchDishes);
    return (
      <div className='card-for-dish'>
        < CartAlert />

		    <div className="row">
              {
              	this.props.searchDishes.map((item, index, array) => (
              	  item.map((item, index, array) => (	
              		<Card title={item.title} 
              		      src={item.src} 
              		      id={item.id} 
              		      key={item.id+"-key"}  
			              description={item.description} 
			              alt={item.alt} 
			              price={item.price+'$'} 
			              onClick = {()=> {
                      AddToCart(item, this.props.cartArray);
                      handleClickTrue();
                      }
                    } /> ))
              	  ))
              }
            </div>
		</div> 
    )
  }
	
};//

let Search = connect (mapStateToProps) (_Search);

export {Search, handleSearch};