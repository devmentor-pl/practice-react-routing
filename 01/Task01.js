import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Home from './../src/components/Home'
import Contact from './../src/components/Contact'

const Task01 = () => {
	return (
		<>
			<h1>Task01</h1>
			<Route path="/task01/home" component={Home}></Route>
			<Route path="/task01/contact" component={Contact}></Route>
			<p>
				<Link to="/task01/home">Home</Link>
			</p>
			<p>
				<Link to="/task01/contact">Contact</Link>
			</p>
		</>
	)
}

export default Task01;

