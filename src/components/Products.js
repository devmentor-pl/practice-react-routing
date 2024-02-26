import React from 'react'
import products from './../products.json'

const Products = () => {
	const allProducts = products.map(prod => {
		return (
			<div key={prod.id}>
				<h2>{prod.name}</h2>
				<p>Opis: {prod.description}</p>
				<h4>Kategoria {prod.category}</h4>
				<h3>Cena: {prod.price}</h3>
			</div>
		)
	})
	return (
		<div>
			<h1>Wszystkie Produkty:</h1>
			{allProducts}
		</div>
	)
}

export default Products
