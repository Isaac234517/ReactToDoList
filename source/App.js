import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import Header from './components/Header.js'
import TaskArea from './components/TaskArea.js'
import Tasks from './models/Tasks.js'
import CreateTaskPage from './components/CreateTaskPage.js'

class ToDoList extends React.Component{
	constructor(props){
		super(props);
	}

	getTasksFromLocalStorage(){
		var objects = JSON.parse(window.localStorage.getItem("tasks"));
		if(objects === null){
			return [];
		}
		else{
			var tasks = objects.map(function(obj,index){
				return Tasks.fromObject(obj);
			});
			return tasks;
		}
	}

	render(){
		return (
			<div>
				<Header title="Action Items" fn="create" path="/CreateTaskPage" />
				<input id="search" type="text"/>
				<TaskArea tasks={this.getTasksFromLocalStorage()} />
			</div>
		)
	}

	goToCreateTaskPage(){
		window.location.href="/CreateTaskPage.js"
	}
}

ReactDOM.render((<Router history={hashHistory}>
				  <Route path="/" component={ToDoList}/>
				  <Route path="CreateTaskPage" component={CreateTaskPage}/>
				</Router>),
				document.getElementById('root'));