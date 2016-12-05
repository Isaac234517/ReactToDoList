import React from 'react';
import {Link} from 'react-router';
require ('../css/header.css');
require ('../css/button.css');
class Header extends React.Component{
	constructor(props){
		super(props);
		this.state={
			date: new Date(),
			weekyDate: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
			}
	}

	componentDidMount(){
		this.timeID = setInterval(()=>{
			this.tick()
		},1000);
	}

	componentWillUnMount() {
		clearInterval(this.timeID);
	}

	render(){
		return(
			<div id="header">
			 <ul>
			   <li>
			   <p>{this.getWeekDay()}</p>
			   <p>{this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}</p>
			   </li>
			   <li><h2>{this.props.title}</h2></li>
			   <li><Link to={this.props.path}><button className={this.props.fn}></button></Link></li>
			 </ul>
			</div>
		)
	}

	tick(){
		this.setState({
			date: new Date()
		});
	}

	getWeekDay(){
		var day = this.state.date.getDay();
		return this.state.weekyDate[day];
	}
}

export default Header;