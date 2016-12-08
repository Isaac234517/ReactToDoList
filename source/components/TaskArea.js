import React from 'react';
import Tasks from "../models/Tasks.js";
require ('../css/general.css');
class TaskArea extends React.Component{
	constructor(props){
		super(props);
		this.onTaskClick = this.onTaskClick.bind(this);
		this.state = {tasks: []};
	}

	componentDidMount(){
		this.setState({
			tasks: this.props.tasks
		});	
	}

	onTaskClick(event){
		event.stopPropagation();
		var parentIndex = event.target.dataset.parentIndex;
		var index = event.target.dataset.key;
		var tasks =  parentIndex === undefined? this.state.tasks[index]:this.state.tasks[parentIndex].subTasks[index]; // this.state.task is a container of tasks model
		if(parentIndex ===undefined && tasks.subTasksAmount >0){
			console.log("foldout");
		}
		else{
		  tasks.completed = !tasks.completed;
		  window.localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
		}
		this.forceUpdate();
	}

	render(){
		var callback = this.onTaskClick;
		return (
				<ul className="tasks-area">
					{
						this.state.tasks.map(function(item,index){
            				return <li key={index} data-key={index} 
            				           onClick={callback} 
            				           className={item.completed ==true? "completed":""}>{item.name}
            				           { 
            				        
            				           	   function(parentIndex){			           	   	
            				           	   	if(item.subTasksAmount >0){   				           	   		
            				           	   	  return <ul>
            				           	   	  			{item.subTasks.map(function(task,index){          				         
            				           	   	  				 return <li key={index} data-key={index} data-parent-index={parentIndex} onClick={callback}>{task.name}</li>
            				           	   	  				})}
            				           	   	  		</ul>
            				           	   	}
            				           	   }(index)
            				                    			            				           	
            				           	 
            				       		}
            				        </li>
          				})
			  		}
				</ul>
		)
	}
}

export default TaskArea