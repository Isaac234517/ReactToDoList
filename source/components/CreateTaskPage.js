import React from 'react';
import Header from './Header.js';
require ('../css/general.css');

class CreateTaskPage extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
			  <Header fn="create" path="/"/>
			  <div className="show-area">
			  	<label htmlFor="create-task-name">Task Name: </label> <input id="create-task-name" type="text"></input>
			  	<input type="button"/>
			  </div>
			</div>
		)
	}
}

export default CreateTaskPage