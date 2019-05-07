import React, { Component } from 'react';

document.addEventListener("click", function () {
	if (document.location.pathname === "/mains" ||
		document.location.pathname === "/salads" ||
		document.location.pathname === "/seafood" ||
		document.location.pathname === "/soups" ||
		document.location.pathname === "/desserts" ||
		document.location.pathname === "/drinks" ||
    document.location.pathname === "/search" ||
	  document.location.pathname === "/"){
            handleClickFalse();
    }
});


function handleClickTrue () {
    this.setState({
      isToggleOn: true,
    });
  }

function handleClickFalse () {
	    this.setState({
	      isToggleOn: false,
	    });
  };


class CartAlert extends Component {
  constructor (props) {
	  super (props);
	  this.state = {isToggleOn: false};
	 
	  handleClickFalse = handleClickFalse.bind(this);
	  handleClickTrue = handleClickTrue.bind(this);
  }

  render () {
    if (this.state.isToggleOn === false) {
      return (
        <div></div>
      )}//

    else {
      return (
        <div onClick={this._handleClickFalse} className="alert alert-dismissible fade show " 
         style={{position: "fixed", 
                 marginTop: "10%", 
                 marginLeft: "25%", 
                 marginRight: "25%",
                 paddingTop: "3%",
                 height: "20%",  
                 width: "50%",
                 backgroundColor: "#F6F930",
                 color: "#249E13",
                 zIndex: 1}} role="alert">
            <h5 className="text-center">           
                <strong>Your dish are in Cart. </strong>
            </h5>
            <p className="text-center"> 
              <a href ="/cart" style={{color: "#249E13" }} 
               className="alert-link">
                  Go to <i className="fas fa-shopping-cart" 
                           style={{color: "#249E13" }} ></i> Cart
              </a> or continue.
            </p>
        </div>
      )
    }
  }
}//

export {CartAlert, handleClickTrue}