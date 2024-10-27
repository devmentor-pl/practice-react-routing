import React, { useState } from 'react';
import { Route, useParams, useHistory } from "react-router-dom"
import Shop from "../src/components/Shop"
import products from "./../src/products.json"

const SearchPage = () => {

    const {minPrice, maxPrice, searchTerm = ''} = useParams()

	function filterByMinPrice(price, products) {
		return Number.isNaN(price) ? products : products.filter(p => p.price >= price)
	}
	
	function filterByMaxPrice(price, products) {
		return Number.isNaN(price) ? products : products.filter(p => p.price <= price)
		
	}

	function filterBySearchTerm(searchTerm, products) {
		const searchTermToLowerCase = searchTerm.toLowerCase()
		return searchTerm.length === '' ? products : products.filter(p => p.name.toLowerCase().includes(searchTermToLowerCase) || p.description.includes(searchTermToLowerCase) )
	}

    const minPriceNumber = Number(minPrice)
    const maxPriceNumber = Number(maxPrice)

    const productsAfterMinPrice = filterByMinPrice(minPriceNumber, products)
 	const productsAfterMaxPrice = filterByMaxPrice(maxPriceNumber, productsAfterMinPrice)
	const productsAfterSearchTerm = filterBySearchTerm(searchTerm, productsAfterMaxPrice)
	

    return <Shop list={productsAfterSearchTerm}/>

}

const Task05 = () => {
	const initSearch = {
		text: "",
		priceMin: "",
		priceMax: "",
	}

	const [form, setForm] = useState(initSearch)
    const history = useHistory()

	function handleChange(e) {
		const value = e.target.value
		const name = e.target.name
		setForm(state => {
			return {
				...state,
				[name]: value,
			}
		})
	}

	function handleSubmit(e) {
        e.preventDefault()

        const { priceMin, priceMax, text } = form

        history.push(`/task05/${priceMin},${priceMax}-${text}`)
    }

	return (
		<>
			<h1>Task05</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Fraza</label>
					<input name='text' value={form.text} onChange={handleChange} />
				</div>
				<div>
					<label>Cena minimalna</label>
					<input
						name='priceMin'
						value={form.priceMin}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Cena maksymalna</label>
					<input
						name='priceMax'
						value={form.priceMax}
						onChange={handleChange}
					/>
				</div>
				<div>
					<input type='submit' />
				</div>
			</form>

			<Route path='/task05/:minPrice?,:maxPrice?-:searchTerm?'>
				<SearchPage />
			</Route>
		</>
	)
}

export default Task05;

