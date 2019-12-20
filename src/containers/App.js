import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
		//console.log('constructor');
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users') //we fetch the users
			.then(response => response.json()) //response magic with json
			.then(users => {this.setState({ robots: users})}); //getting the users and update users with set state
		}

	onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value})
		//console.log(filteredRobots);
	}

	render(){
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if (!robots.length){
			return <h1>Loading</h1>
		}
		else {
			return(
				<div className ='tc'>
					<h1 className = 'f1'>RoboFriends</h1>
			  		<SearchBox searchChange={this.onSearchChange} />
			  		<Scroll>
			  			<ErrorBoundry>
							<CardList robots={filteredRobots}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			); 
		}
	}
}

export default App;