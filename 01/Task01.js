import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../src/components/Home';
import Contact from '../src/components/Contact';

const Task01 = () => {
	return (
		<Router>
			<section>
				<h1>Task01</h1>
				<p>przejdź do <Link to='/task01/home'>home</Link>!</p>
				<p>przejdź do <Link to='/task01/contact'>conctact</Link>!</p>
				<Route
					path='/task01/home'
					component={Home}
				/>
				<Route
					path='/task01/contact'
					component={Contact}
				/>
			</section>
		</Router>
	);
};

export default Task01;
