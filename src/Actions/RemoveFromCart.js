import {store, actionAddToCart} from './Redux.js';
import { countNumInCart } from './countNumInCart.js'


function NewCartArr (newCartArr) {
    localStorage.setItem("cartArray", JSON.stringify(newCartArr));
    store.dispatch(actionAddToCart(newCartArr));
}


function RemoveFromCart (item, arr, index) {
	if (arr.length === 1 && item.number===1){
            let newCartArr = [];
		    NewCartArr (newCartArr);
		};

	if (item.number===1 && arr.length > 1){
		    arr.splice(index, 1);
		    NewCartArr (arr);
	} 

	if ( item.number > 1 ) {
		        --item.number;
		        NewCartArr (arr);
	        };

	countNumInCart ();
}



export {RemoveFromCart}