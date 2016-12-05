import React from 'react';
import Header from './Header.js';
import Task from "../models/Task.js";
require ('../css/general.css');

class CreateTaskPage extends React.Component{
	constructor(props){
		super(props);
		this.state ={ task: new Task("", []) }
		this.createSubTask = this.createSubTask.bind(this);
		this.onSubTaskTextChange = this.onSubTaskTextChange.bind(this);
		this.onTaskNameChange = this.onTaskNameChange.bind(this);
	}

	createSubTask(){
		var task = this.state.task;
		task.addSubTask("");
		this.setState({task: task});
	}

	onSubTaskTextChange(event){
		var index = event.target.parentNode.getAttribute("data-index");
		this.state.task.subTasks[index] = event.target.value;
	}

	onTaskNameChange(event){
		this.state.task.name = event.target.value;
	}

	render(){
		return(
			<div>
			  <Header title="create" fn="back" path="/"/>
			  <div className="show-area">
			  	<label htmlFor="create-task-name">Task Name: </label> <input className="create-task-name" type="text" onChange={this.onTaskNameChange}></input>
			  	<button type="button" onClick={this.createSubTask}>create sub task</button>
			  	<ul>
			  	{
			  		this.state.task.subTasks.map((item, index)=>{
			  			return <li data-index={index} key={index} ><input type="text" className="create-task-name" onChange={this.onSubTaskTextChange}></input></li>
			  		})
			  	}
			  	</ul>
			  	<button type="button">Create Task</button>
			  </div>
			</div>
		)
	}
}

export default CreateTaskPage