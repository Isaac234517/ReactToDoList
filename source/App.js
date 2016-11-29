import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import Header from './components/Header.js'
import TaskArea from './components/TaskArea.js'
import Task from './models/Task.js'
import CreateTaskPage from './components/CreateTaskPage.js'

class ToDoList extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<Header title="List" fn="home" path="/CreateTaskPage" />
				<TaskArea tasks={[new Task("Assignment", []),
								  new Task("Assignment 2", [])
								  ]} />
			</div>
		)
	}

	goToCreateTaskPage(){
		console.log("Hi")
		window.location.href="/CreateTaskPage.js"
	}
}

ReactDOM.render((<Router history={hashHistory}>
				  <Route path="/" component={ToDoList}/>
				  <Route path="CreateTaskPage" component={CreateTaskPage}/>
				</Router>),
				document.getElementById('root'));