import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './home/Home.jsx';
import Login from './login/Login.jsx';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/login' component={Login}/>
					<Route exact path='/' component={Home} />
					<Redirect from='/' to='/login'/>
				</Switch>
			</Router>
		);
	}
}

export default App;

