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
		this.onDone = this.onDone.bind(this);
	}

	componentDidMount(){
		// this.timeID = setInterval(()=>{
		// 	this.tick()
		// },1000);
	}

	componentWillUnMount() {
		// clearInterval(this.timeID);
	}

	onDone(event){
		this.props.done();
	}

	render(){
		return(
			<div id={this.props.fn ==="create"? "header": "header2"}>
			 <ul>
			   <li>{
			   	function(obj){
			   		if(obj.props.fn === "create"){
			   			return <p>{obj.state.date.toLocaleDateString()} {obj.getWeekDay()}</p>
			   		}
			   		else{
			   			return <Link to={obj.props.path}><button className="back"></button></Link>			   		}
			   	}(this)
			   }
			   </li>

			   	 {function(obj){
			   	 	if(obj.props.fn ==="create"){
			   	 		 return <li><h2>{obj.props.title}</h2></li>
			   	 	}
			   	 }(this)}

			   {function(obj){
			   		if(obj.props.fn === "create"){
			   		return <li><Link to={obj.props.path}><button className="create"></button></Link></li>
			   		}
			   }(this)}

			   {function(obj){
			   		if(obj.props.fn !=="create"){
			   			return <li id="done"><button type="button" className="done" onClick={obj.onDone}>Done</button></li>
			   		}	
			   		}(this)
				}
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