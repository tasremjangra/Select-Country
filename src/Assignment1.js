import React, {Component} from 'react';
import './Select.css';

class Assignment1 extends Component{

	constructor(props){
		super(props);
		this.state = { 

		"countryList":[{"id": 1, 'name': 'India'}, {"id": 2, 'name': 'Australia'},
		{"id": 3, 'name': 'USA'}, {"id": 4, 'name': 'England'}, {"id": 5, 'name': 'South Aeferica'},
		{"id": 6, 'name': 'Nepal'}],

		"stateList": [{"id":2001, 'countryId': 1, "name": 'Haryana'}, {"id":2002, 'countryId': 1, "name": 'Punjab'},
		{"id":2003, 'countryId': 2, "name": 'Tasmania '}, {"id":2004, 'countryId': 2, "name": 'Victoria'},
		{"id":2005, 'countryId': 3, "name": 'California'}, {"id":2006, 'countryId': 3, "name": 'Florida'},
		{"id":2007, 'countryId': 4, "name": 'Bristol'}, {"id":2008, 'countryId': 4, "name": 'Warrington'},
		{"id":2009, 'countryId': 5, "name": 'Cape Town'}, {"id":2010, 'countryId': 5, "name": 'Durban'},
		{"id":2011, 'countryId': 6, "name": 'Pokhara'}, {"id":2012, 'countryId': 6, "name": '	Lalitpur'}],

		"cityList": [{"id": 5001, 'stateId': 2001, "name": "Hisar"}, {"id": 5002, 'stateId': 2001, "name": "Fatehabad"},
		{"id": 5003, 'stateId': 2002, "name": "Amritsar"}, {"id": 5004, 'stateId': 2002, "name": "Ludhiana"},
		{"id": 5005, 'stateId': 2003, "name": "Burnie"},{"id": 5006, 'stateId': 2003, "name": "Launceston"},
		{"id": 5007, 'stateId': 2004, "name": "Melbourne"}, {"id": 5008, 'stateId': 2004, "name": "Ballarat"},
		{"id": 5009, 'stateId': 2005, "name": "Los Angeles"}, {"id": 5010, 'stateId': 2005, "name": "San Francisco"},
		{"id": 5011, 'stateId': 2006, "name": "Miami"}, {"id": 5012, 'stateId': 2006, "name": "Tampa"},
		{"id": 5013, 'stateId': 2007, "name": "Bristol"}, {"id": 5014, 'stateId': 2007, "name": "Bristol2"},
		{"id": 5015, 'stateId': 2008, "name": "Warrington"}, {"id": 5016, 'stateId': 2008, "name": "Warrington2"},
		{"id": 5017, 'stateId': 2009, "name": "Cape Town"},{"id": 5018, 'stateId': 2009, "name": "Cape Town2"},
		{"id": 5019, 'stateId': 2010, "name": "Durban"}, {"id": 5020, 'stateId': 2010, "name": "Durban2"},
		{"id": 5021, 'stateId': 2011, "name": "Pokhara"}, {"id": 5022, 'stateId': 2011, "name": "Pokhara2"},
		{"id": 5023, 'stateId': 2012, "name": "Lalitpur"}, {"id": 5024, 'stateId': 2012, "name": "Lalitpur2"}],
		'empty':[],'dummy':[],
		'empty1':[]
	}
}

	country = (e, name, index) => {
		for(let i =0;i<=this.state.empty.length;i++){
			this.state.empty.pop();
		}
		e.preventDefault();
		console.log(name)
		for(let i = 0; i < this.state.stateList.length; i++){
			console.log(this.state.stateList[i].countryId)
			if(name.id===this.state.stateList[i].countryId){
				console.log(this.state.stateList[i]);
				const NewState = this.state.empty;
				NewState.push(this.state.stateList[i]);
				this.setState({empty:NewState})
				
				console.log(this.state.empty)
			}
		}
	}

	city = (e, name, index) => {
		for(let i =0;i<=this.state.empty.length;i++){
			this.state.empty1.pop();
		}
		e.preventDefault();
		console.log(name)
		for(let i = 0; i < this.state.cityList.length; i++){
			console.log(this.state.cityList[i].stateId)
			if(name.id===this.state.cityList[i].stateId){
				console.log(this.state.cityList[i]);
				const NewState = this.state.empty1;
				NewState.push(this.state.cityList[i]);
				this.setState({empty1:NewState})
				console.log(this.state.empty1)
			}
		}
	}

	render(){
		return(
			<div className="Assignment1">
				<h1 id="head">Select Country State and City</h1>
				<select className= "Country"  >
	  				<option >-Country-</option>
	  				{
	  					this.state.countryList.map((name,index) =>(
	  						<option key={name.id} onClick={(e) => {this.country(e,name,index)}}>
	  						{name.name}</option>
	  						)
	  					)
	  				}
				</select>&emsp;	

				<select id="State"  >
	  				<option >-State-</option>
	  					{
	  					this.state.empty.map((name,index) =>(
	  						<option key={name.id} onClick={(e) => {this.city(e,name,index)}}>
	  						{name.name}</option>
	  						)
	  					)
	  				}			
				</select>&emsp;

				<select className= "City" >
	  				<option >-City-</option>
	  					{
	  					this.state.empty1.map((name,index) =>(
	  						<option key={name.id}>
	  						{name.name}</option>
	  						)
	  					)
	  				}		
				</select>
			</div>
		);
	}
}

export default Assignment1;