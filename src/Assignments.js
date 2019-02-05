import React, {Component} from 'react';
import {BrowserRouter as Router ,Route,Link} from "react-router-dom";

class Assignments extends Component{
	render(){
		return(
			<div>
				<Link to="Assignment1">Assignment 1st</Link>
			</div> 
		);
	}
}

export default Assignments