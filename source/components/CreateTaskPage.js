import React from 'react';
import Header from './Header.js';
import Tasks from "../models/Tasks.js";
import Task from "../models/Task.js";
require ('../css/general.css');

class CreateTaskPage extends React.Component{
	constructor(props){
		super(props);
		this.state ={ tasks: new Tasks("", [],false) }
		this.createSubTask = this.createSubTask.bind(this);
		this.onSubTaskTextChange = this.onSubTaskTextChange.bind(this);
		this.onTaskNameChange = this.onTaskNameChange.bind(this);
		this.saveTask = this.saveTask.bind(this);
	}

	createSubTask(){
		var tasks = this.state.tasks;
		tasks.addSubTask(new Task("",false));
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
		if(this.state.tasks.name!=""){
			var tasks = window.localStorage.getItem("tasks");
			if(tasks === null){
				tasks = []
			}
			else{
				tasks = JSON.parse(tasks);
			}
			this.state.tasks.setSubTasks(this.state.tasks.subTasks.filter(function(item){
				return item.name !== ""
			}));
			tasks.push(this.state.tasks);
			window.localStorage.setItem("tasks", JSON.stringify(tasks));
		}
	}

	render(){
		return(
			<div>
			  <Header title="Create" fn="back" path="/" done={this.saveTask}/>
			  <div className="show-area">
			  	<label htmlFor="create-task-name">Task Name: </label> <input className="create-task-name" type="text" onChange={this.onTaskNameChange}></input>
			  	<ul>
			  	{
			  		this.state.tasks.subTasks.map((item, index)=>{
			  			return <li data-index={index} key={index} >SubTask{index}: <input type="text" className="create-task-name" onChange={this.onSubTaskTextChange}></input></li>
			  		})
			  	}
			  	</ul>
			  	<button className="plus" type="button" onClick={this.createSubTask}>+</button>
			  </div>
			</div>
		)
	}
}

export default CreateTaskPage