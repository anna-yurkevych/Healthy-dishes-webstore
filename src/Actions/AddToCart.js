import {store, actionAddToCart} from './Redux.js';
import { countNumInCart } from './countNumInCart.js'


function NewCartArr (arr, item, index) {
	let newCartArr = arr.concat(item);
    localStorage.setItem("cartArray", JSON.stringify(newCartArr));
    store.dispatch(actionAddToCart(newCartArr));
}


function AddToCart (item, cartArray, index) {
 
	if (!item.number){
	   item.number = 1;
	};

	if ( cartArray.length === 0 ){
		
		NewCartArr (cartArray, item);

	} else {
		  
		  let sameDish = false;
		  cartArray.forEach(function(it, i, arr){
			  	
			  	if (item.id === it.id){  
			        ++it.number;

			        localStorage.setItem("cartArray", JSON.stringify(arr));
			        store.dispatch(actionAddToCart(arr));

			        sameDish = true;
		       }
		  })

	      if (sameDish === false) {
		      NewCartArr (cartArray, item);
		 }
	  };

	  countNumInCart ();  
}

export { AddToCart }