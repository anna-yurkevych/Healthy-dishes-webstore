import {createStore, combineReducers} from 'redux';
//import thunk from 'redux-thunk';
//import {createStore, combineReducers, applyMiddleware} from 'redux';

let cartReducer = (state, action) => {
  if (state === undefined){
  	return {...state,
  	        cartArray: !!localStorage.cartArray ? JSON.parse(localStorage.getItem("cartArray")) : [], 
            numInCart: !!localStorage.numInCart ? JSON.parse(localStorage.getItem("numInCart")) : 0,
  	    }
  }
  if (action.type === "ADD_TO_CART"){
      return {...state,
              cartArray: action.cartArray,
            }
  }
  if (action.type === 'NUM_IN_CART'){
    return {...state,
            numInCart: action.numInCart,
           }
  }
  return state
};

let searchReducer = (state, action) => {
  if ( state === undefined ) {
    return { ...state,
             searchDishes: !!localStorage.searchDishes ? JSON.parse(localStorage.getItem("searchDishes")) : [], 
           }
  }         
  if ( action.type === "SEARCHING_DISH" ){
    return {...state,
            searchDishes: action.searchDishes,
          }
  }
  return state
}
  


const reducers = combineReducers({ 
    cart: cartReducer, 
    search: searchReducer,  
})

const store = createStore(reducers)//, applyMiddleware(thunk))

store.subscribe(() => console.log("store.getState", store.getState()))

let mapStateToProps = state => { 
  return { cartArray: state.cart.cartArray,
           numInCart: state.cart.numInCart,
           searchDishes: state.search.searchDishes,            
         }
}

let mapDispatchToProps = () => ({});

const actionAddToCart = cartArray => ( { type: 'ADD_TO_CART', 
                                        cartArray, 
                                     } ); 

const actionSearchDish = searchDishes => ( { type: 'SEARCHING_DISH',
                                             searchDishes,
                                     } );

const actionNumInCart = numInCart => ( {type: 'NUM_IN_CART',
                                        numInCart,
                                      } );


export {store, 
        reducers,
        mapStateToProps, 
        actionAddToCart, 
        actionSearchDish, 
        actionNumInCart,
        mapDispatchToProps}