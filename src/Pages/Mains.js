import React, { Component } from 'react';
import {connect}   from 'react-redux';

import {Card} from '../Components/Card.js';
import {AllDishes} from '../Data/AllDishes.js';
import {AddToCart} from '../Actions/AddToCart.js';
import { mapStateToProps } from '../Actions/Redux.js';
import {CartAlert, handleClickTrue} from '../Components/CartAlert';


class _Mains extends Component {
 constructor (props){
 	super (props);
 	this.state = {};
 } 
 

 render(){
  return (
      <div className='card-for-dish'>
        < CartAlert />
        
		    <div className="row">
              {
              	AllDishes.mains.map((item, index, array) => (
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
                        } />
                         ))
              }
            </div>
		</div> 
  )
 }	
}

let Mains = connect (mapStateToProps)(_Mains)

export {Mains}