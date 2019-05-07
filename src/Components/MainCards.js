import React, { Component } from 'react';


class MainCard extends Component {
	render(){
		return(
			<div className="card card-main-page" id = {this.props.id} >
			  <a href={this.props.dishesPage} className="card-link">
			    <img src={this.props.src} className="card-img-top" alt={this.props.alt} />
			    <div className="card-body">
			      <h5 className="card-title">{this.props.title}</h5>
			      <p className="card-text">{this.props.description}</p>
			    </div>
			    <div className="card-footer">
			      
			        <button type="button" className="btn btn-add-to-cart" >
			          <i className="fas fa-utensils"></i>
			        </button>
			    </div>
			   </a>
			</div>
	  )
	}
}//

class MainCards extends Component {
 constructor (props){
 	super (props);
 	this.description = "Dishes description"
 	this.state = {}
 }


 render(){
  return (<>
           <div className="card-deck" >

			  <MainCard title="Salads" src="/images/healthy-food4.jpg" 
			        description={this.description} alt="Salads" dishesPage="/salads" /> 

			  <MainCard title="Soups" src="/images/soups.jpg"   
			        description={this.description} alt="Soups" dishesPage="/soups" /> 

			  <MainCard title="Seafood" src="/images/seafood1.jpg"   
			        description={this.description} alt="Seafood" dishesPage="/seafood" />

		   </div>
		   <div className="card-deck" style={{marginTop: "2%"}}>

			  <MainCard title="Mains" src="/images/garnish.jpg"   
			        description={this.description} alt="Mains" dishesPage="/mains" />

			  <MainCard title="Healthy desserts" src="/images/desserts.jpg" 
			        description={this.description} alt="Healthy desserts" dishesPage="/desserts"/>			 

			  <MainCard title="Drinks" src="/images/drinks.jpg"   
			        description={this.description} alt="Drinks" dishesPage="/drinks" /> 

		   </div>
		 </>
  )
 }	
}

export {MainCards}