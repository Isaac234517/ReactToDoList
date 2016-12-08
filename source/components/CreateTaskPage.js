import React from 'react';
import Header from './Header.js';
import Tasks from "../models/Tasks.js";
import Task from "../models/Task.js";
require ('../css/general.css');

class CreateTaskPage extends React.Component{
	constructor(props){
		super(props);
		this.state ={ tasks: new Tasks("", []) }
		this.createSubTask = this.createSubTask.bind(this);
		this.onSubTaskTextChange = this.onSubTaskTextChange.bind(this);
		this.onTaskNameChange = this.onTaskNameChange.bind(this);
		this.saveTask = this.saveTask.bind(this);
	}

	createSubTask(){
		var tasks = this.state.tasks;
		tasks.addSubTask(new Task(""));
		this.setState({tasks: tasks});
	}

	onSubTaskTextChange(event){
		var index = event.target.parentNode.getAttribute("data-index");
		this.state.tasks.subTasks[index].name = event.target.value;
	}

	onTaskNameChange(event){
		this.state.tasks.name = event.target.value;
	}

	saveTask(){
		var tasks = window.localStorage.getItem("tasks");
		if(tasks === null){
			tasks = []
		}
		else{
			tasks = JSON.parse(tasks);
		}
		tasks.push(this.state.tasks);
		window.localStorage.setItem("tasks", JSON.stringify(tasks));
		window.location.href ="/";
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
			  		this.state.tasks.subTasks.map((item, index)=>{
			  			return <li data-index={index} key={index} ><input type="text" className="create-task-name" onChange={this.onSubTaskTextChange}></input></li>
			  		})
			  	}
			  	</ul>
			  	<button type="button" onClick={this.saveTask}>Create Task</button>
			  </div>
			</div>
		)
	}
}

export default CreateTaskPage