import React from 'react'

import Shop from '../src/components/Shop'
import { Switch, Route } from 'react-router-dom'

const Task03 = () => {
	return (
		<>
			<h1>Task03</h1>
			<Route path="/task03/">
				<Shop />
			</Route>
			{/* <Route path="/task03/:alias">
				<Shop />
			</Route> */}
		</>
	)
}

export default Task03
