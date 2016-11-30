import React from 'react';
import Header from './Header.js';
require ('../css/general.css');

class CreateTaskPage extends React.Component{
	constructor(props){
		super(props);
		this.state ={ task:{
							name: '',
			                subTasks: []
			            }
			         }
		this.createSubTask = this.createSubTask.bind(this);;
		this.onSubTaskTextChange = this.onSubTaskTextChange.bind(this)
	}

	createSubTask(){
		var task = this.state.task;
		task.subTasks.push('');
		this.setState({task: task});
	}

	onSubTaskTextChange(event){
		var index = event.target.parentNode.getAttribute("data-index");
		console.log(index);
		this.state.task.subTasks[index] = event.target.value;
		console.log(this.state.task.subTasks);
		console.log(this.state.task);
	}

	render(){
		return(
			<div>
			  <Header title="create" fn="create" path="/"/>
			  <div className="show-area">
			  	<label htmlFor="create-task-name">Task Name: </label> <input className="create-task-name" type="text"></input>
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