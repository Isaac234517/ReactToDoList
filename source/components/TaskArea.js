import React from 'react';
class TaskArea extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
				<ul>
					{
						this.props.tasks.map(function(item,index){
            				return <li key={index}> {item.getName()} </li>
          				})
			  		}
				</ul>
		)
	}
}

export default TaskArea