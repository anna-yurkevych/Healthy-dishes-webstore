import React, { Component } from 'react';

/*
			  <img src={this.props.src} style ={{position: "fixed", zIndex: 10,
			                                     width: "60%",
											     left: "20%",
											     right: "20%",
											     }} 
			       alt={this.props.alt} />*/

class Card extends Component {
	render(){
		return(			
			<div className="card mx-auto card-main-page" id = {this.props.id} style={{margin: "2%"}} >
			    
			    <img src={this.props.src} className="card-img-top" alt={this.props.alt}
			     onClick = {() => console.log (this.props.src) } />
			    
			    <div className="card-body">
			      <h5 className="card-title">{this.props.title}</h5>
			      <p className="card-text" style = {{whiteSpace: "pre"}} >{this.props.description}</p>
			    </div>

			    <div className="card-footer d-flex justify-content-between">
			        <span className="badge badge-pill num-of-dish align-self-center">
				      {this.props.price}
				    </span>
				    <button type="button" onClick ={this.props.onClick} className="btn btn-add-to-cart" >
			          <i className="fas fa-cart-plus"></i>
			        </button>
			    </div>

			</div>
	  )
	}
}


export {Card}