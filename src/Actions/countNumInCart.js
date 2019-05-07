import {store, actionNumInCart} from './Redux.js';

function countNumInCart (cartArray=store.getState().cart.cartArray) {
  let numInCart;

  if (cartArray.length !== 0) {	

	     numInCart = 0;
	  	 cartArray.forEach((item, index, array) => {
			numInCart+=item.number;
	       }
	     );
	} else {
		numInCart = 0;
	}

     localStorage.setItem("numInCart", JSON.stringify(numInCart));
	 store.dispatch(actionNumInCart(numInCart));	
}


export { countNumInCart }