import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';
import NotFound from './NotFound';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  const routes = [
    @@ - 33, 7 + 34, 10 @@ const App = () => {
				<Route path="/task03" component={Task03} />
				<Route path="/task04" component={Task04} />
				<Route path="/task05" component={Task05} />
				<Route path="/404" component={NotFound} />
				<Route>
					<Redirect to="/404" />
				</Route>
			</Switch >
		</Router >
	);
};
export default App;