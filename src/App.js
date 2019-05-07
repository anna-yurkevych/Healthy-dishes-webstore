import React, { Component } from 'react';
import './App.css';

import { store } from './Actions/Redux.js'

import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider }   from 'react-redux';

import { Nav } from './Components/Nav.js';
import { Footer } from './Components/Footer.js';

import {Main} from './Pages/MainPage.js';
import {Cart} from './Components/Cart.js';
import {Checkout} from './Pages/Checkout.js';
import {Salads} from './Pages/Salads.js';
import {Mains} from './Pages/Mains.js';
import {Soups} from './Pages/Soups.js';
import {Seafood} from './Pages/Seafood.js';
import {Desserts} from './Pages/Desserts.js';
import {Drinks} from './Pages/Drinks.js';
import {Search} from './Pages/Search.js'



class App extends Component {
 
	render (){
	  console.log("store.getState", store.getState());

	  return (<Provider store = { store } >
			    
		        <Router history = {createBrowserHistory()}>
		          <Nav />
		          <Switch>
		            <Route path="/" component={ Main } exact /> 
		            <Route path="/cart" 
		                   component={ Cart } /> 
		            <Route path="/checkout" 
		                   component={ Checkout } /> 
		            <Route path="/salads" 
		                   component={ Salads } />
		            <Route path="/mains" 
		                   component={ Mains } />
		            <Route path="/seafood" 
		                   component={ Seafood } />
		            <Route path="/desserts" 
		                   component={ Desserts } />       
		            <Route path="/soups" 
		                   component={ Soups } />
		            <Route path="/drinks" 
		                   component={ Drinks } />
		            <Route path="/search"
		                   component={ Search } />
		          </Switch>
		          <Footer />
		        </Router>
		        
		      </ Provider>
	)	        

  }		        
}

export default App;
