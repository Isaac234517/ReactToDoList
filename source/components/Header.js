import React from 'react';

class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
			   <p>Date</p>
			   <p>Time</p>
			   <h1>{this.props.title}</h1>
			   <button type="button"> create </button>
			</div>
		)
	}
}

export default Header;