import React, { useEffect, useState } from 'react'
import Slider from './../src/components/slider/Slider'
import { Switch, Route, useHistory } from 'react-router-dom'
import Shop from '../src/components/Shop'
import products from './../src/products.json'
import FilterNameForm from '../src/components/FilterNameForm'
import FilteredProducts from '../src/components/FilteredProducts'

const Task05 = () => {
	const history = useHistory()
	const [sliderValue, setSliderValue] = useState([])
	const [submittedSliderValue, setSubmittedSliderValue] = useState([])
	const [inputValue, setInputValue] = useState('')
	const [submittedInputValue, setSubmittedInputValue] = useState('')

	const handleSliderChange = value => {
		setSliderValue(value)
	}

	const handleInputChange = e => {
		setInputValue(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		setSubmittedSliderValue(sliderValue)
		setSubmittedInputValue(inputValue)
		history.push(`/task05/minPrice${sliderValue[0]},maxPrice${sliderValue[1]},search="${submittedInputValue}"`)
		setInputValue('')
		console.log(inputValue)
	}

	return (
		<>
			<h1>Task05</h1>
			<Slider onChange={handleSliderChange}></Slider>

			<p>Min: {sliderValue[0]}</p>
			<p>Max: {sliderValue[1]}</p>

			<FilterNameForm handleInputChange={handleInputChange} handleSubmit={handleSubmit}></FilterNameForm>

			<Switch>
				<Route exact path="/task05">
					<Shop products={products} />
				</Route>
				<Route path="/task05/:minValue:maxValue:search">
					<FilteredProducts products={products} searchData={submittedInputValue} valueData={submittedSliderValue} />
				</Route>
			</Switch>
		</>
	)
}
export default Task05
