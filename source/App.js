import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js'

class ToDoList extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<Header title="List"/>
			</div>
		)
	}
}

ReactDOM.render(<ToDoList/>, document.getElementById('root'));