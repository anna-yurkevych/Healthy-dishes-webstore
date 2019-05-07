import React, { Component } from 'react';
import { handleSearch } from '../Pages/Search.js';
import { CartNav } from './CartNav.js';



class Nav extends Component {
	render(){
	  return (
	     <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor: "#2BC016"}}>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
			    <a className="navbar-brand" href="/">Main</a>
			    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
			      <li className="nav-item">
			        <a className="nav-link" href="/salads">Salads</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="/mains">Mains</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="/seafood" >Seafood</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="/soups" >Soups</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="/desserts" >Desserts</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="/drinks" >Drinks</a>
			      </li>
			    </ul>

			    <CartNav />

			    <form className="form-inline my-2 my-lg-0">
			      <input className="form-control mr-sm-2" type="search" 
			             placeholder="Search for dishes" aria-label="Search"
			             onChange ={(event) => handleSearch(event)} />
			      
			          <a href="/search">
			            <button className="btn my-2 my-sm-0 btn-search" type="button">Search</button>
			          </a>  
			      
			    </form>

			  </div>
         </nav>
	  )	
	}
}

export {Nav}