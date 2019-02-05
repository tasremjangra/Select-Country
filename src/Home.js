import React, {Component} from 'react';
import {BrowserRouter as Router ,Route,Link} from "react-router-dom";
import Assignment1 from './Assignment1';
import App from './App';
import Assignments from './Assignments'

class Home extends Component{
	render(){
		return(
			<Router>
			  	<div>
			  	<Route exact path="/" component={App} />
			  	<Route path="/Assignment1" component={Assignment1} />
			  	<Route path="/Assignments" component={Assignments} />
			  	</div>
	  		</Router>	
		);
	}
}
export default Home