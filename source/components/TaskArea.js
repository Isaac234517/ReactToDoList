import React from 'react';
import Tasks from "../models/Tasks.js";
class TaskArea extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
				<ul>
					{
						this.props.tasks.map(function(item,index){
							//console.log(index);
							//console.log(typeof item);
            				return <li key={index}> {item.name} </li>
          				})
			  		}
				</ul>
		)
	}
}

export default TaskArea