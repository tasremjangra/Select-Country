import React, {Component} from 'react';
import './Select.css';

class Search extends Component{
	constructor(props){
		super(props);
		this.state = {value:[{"name":"fatehabad"}, {"name":"hisar"},{"name":"sirsa"}, {"name":"sirsa"},
		{"name":"faridabad"}, {"name":"gurugram	"}, {"name":"panipat"}, {"name":"ambala"}, {"name":"yamunanagar"}, 
		{"name":"rohtak"}, {"name":"karnal"}, {"name":"sonipat"}, {"name":"panchkula"}, {"name":"bhiwani"},
		{"name":"bahadurgarh"}, {"name":"jind"}, {"name":"	thanesar"}, {"name":"kaithal"}, {"name":"rewari	"},
		{"name":"	Palwal"}],
		text: "", empty:[], empty1:[]}
	}

	handleChangetext = (event) =>{
        this.setState({text:event.target.value});
        const temp = event.target.value
        console.log(temp);
        for(let i = 0; i<this.state.value.length; i++){
	        if(temp===this.state.value[i].name){
	        	console.log(this.state.value[i].name)
	        	const NewState = this.state.empty1;
				NewState.push(this.state.value.name);
				this.setState({empty1:NewState})
	        }
	    } 
    }

    find = () => {
    	for(let i =0;i<=this.state.empty.length;i++){
			this.state.empty.pop();
		}
    	const temp = this.state.text;
    	const temp1 = temp.ignoreCase
    	for(let i = 0; i < this.state.value.length; i++){
    		if(temp===this.state.value[i].name){
    			console.log(this.state.value[i].name)
    			const NewState = this.state.empty;
				NewState.push(this.state.value[i]);
				this.setState({empty:NewState})
    		}
    	}
    }

	render(){
		return(
			<div className="Search">
					<input type="text" onChange={this.handleChangetext} value={this.state.text} id="demo" placeholder="Search City"/>
					<button onClick={this.find} id="btn">Find</button>
				{
					this.state.empty.map((name, index) =>(
							<h1 key={index}>{name.name}</h1>		
						)
					)
				
				}
				<h1 id="no" />

			</div>
		)
	}
}

export default Search;