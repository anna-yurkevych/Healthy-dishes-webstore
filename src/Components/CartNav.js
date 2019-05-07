import React, { Component } from 'react';
import {connect}   from 'react-redux';
import { mapStateToProps } from '../Actions/Redux.js';



class _CartNav extends Component {

   render () {
   	if (this.props.numInCart === 0) {
   		return (
	   		     <a className="navbar-brand nav-link" href="/cart">
				    <i className="fas fa-shopping-cart"></i>
				 </a>
   			)
   	}
   	 else return (
	   	 	       <a className="navbar-brand nav-link" href="/cart">
				      <p className = "num-in-cart" >{this.props.numInCart}</p>
				      <i className="fas fa-shopping-cart"></i>
				   </a>
   	 	)
   }

}

let CartNav = connect (mapStateToProps)(_CartNav);

export {CartNav}