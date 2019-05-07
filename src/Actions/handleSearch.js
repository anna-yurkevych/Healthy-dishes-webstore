
import {AllDishes} from '../Data/AllDishes.js';

import { store, actionSearchDish } from '../Actions/Redux.js';

function handleSearch (event) {
                let searchQuery = event.target.value.toLowerCase();
                let displayedDish = [];
                	
                	for (let key in AllDishes) {
			                
			                let dishes = AllDishes[key].filter(function(item) {
				                    let searchValue = item.title.toLowerCase();
				                    return searchValue.indexOf(searchQuery) !== -1;
			                  }
			                )

			                if (dishes.length > 0 ) {
			                  displayedDish.push(dishes);
			                  console.log ("displayedDish", displayedDish);

			                  localStorage.setItem("searchDishes", JSON.stringify(displayedDish));
			                  store.dispatch(actionSearchDish(displayedDish));
			              };
                    };
};

export {handleSearch};