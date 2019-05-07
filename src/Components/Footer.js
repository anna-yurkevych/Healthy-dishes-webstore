import React, { Component } from 'react';
import { CartNav } from './CartNav.js';


class Footer extends Component {
	constructor (props){
		super (props);
        this.state = {
        	className: "navbar navbar-expand-lg navbar-dark",
        }
	}

	componentDidMount () {
       if (window.location.pathname === "/cart" || 
       	   window.location.pathname === "/checkout" ||
       	   window.location.pathname === "/search" ) {
       	     this.setState ({className: "navbar fixed-bottom navbar-expand-lg navbar-dark"});
       }
	}

	render () {
		//console.log ("window.location.pathname", window.location.pathname);

		return (
			<footer className = {this.state.className} style={{backgroundColor: "#000", marginTop: "6%"}}>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#footer" aria-controls="footer" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="footer">
			    <span style={{color: "white"}}>Corporation «Healthy food» @ All rights reserved</span>

			    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
			      <li className="nav-item">
			        <a className="nav-link " href="/"> Main</a>
			      </li>
			    </ul>

			    < CartNav />
			  </div>
			</footer>
	  )
	}
}

export {Footer}