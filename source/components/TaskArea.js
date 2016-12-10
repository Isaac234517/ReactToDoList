import React from 'react';
import Tasks from "../models/Tasks.js";
require ('../css/general.css');
class TaskArea extends React.Component{
	constructor(props){
		super(props);
		this.onTaskClick = this.onTaskClick.bind(this);
		this.state = {tasks: [],
					   unfolded:{}
		             };
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
			if(this.state.unfolded[index]===undefined){
				this.state.unfolded[index] = true;
			}
			else{
				this.state.unfolded[index]=!this.state.unfolded[index];
			}
		}
		else{
		  if(parentIndex !== undefined){
		  	tasks.completed = !tasks.completed;
		  	this.state.tasks[parentIndex].setCompleted();
		  }
		  else{
		  	this.state.tasks[index].setCompleted();
		  }
		  window.localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
		}
		this.forceUpdate();
	}

	render(){
		var callback = this.onTaskClick;
		var unfolded = this.state.unfolded;
		return (
			<div className="tasks-area">
				<ul className="tasks">
					{
						
						this.state.tasks.map(function(item,index){
            				return <li key={index} data-key={index} 
            				           onClick={callback} 
            				           className={item.completed ==true? "completed":""}>{item.name}
            				           {
            				           	function(parentIndex,unfolded){			           	   	
            				           	   	if(item.subTasksAmount >0){
            				           	   	var clickParent = function(event){
            				           	   		event.stopPropagation();
            				           	   		event.preventDefault();
            				           	   		event.target.parentElement.parentElement.click();
            				           	   	}
            				           	   	var name = unfolded[parentIndex]=== true? "unfolded": "folded"; 				           	   		
            				           	   	  return (<div><button onClick={clickParent}className={name==="unfolded"? "up-arrow":"down-arrow"}></button><ul className={name}>
            				           	   	  			{item.subTasks.map(function(task,index){          				         
            				           	   	  				 return <li key={index} data-key={index} 
            				           	   	  				 			data-parent-index={parentIndex} 
            				           	   	  				 			onClick={callback}
            				           	   	  				 			className={task.completed == true? "completed":""}>
            				           	   	  				 			{task.name}
            				           	   	  				 		</li>
            				           	   	  				})}
            				           	   	  		</ul></div>)
            				           	   	}
            				           	   }(index,unfolded)
            				                    			            				           	
            				           	 
            				       		}
            				        </li>
          				})
			  		}
				</ul>
			</div>
		)
	}
}

export default TaskArea