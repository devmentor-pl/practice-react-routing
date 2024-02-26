import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import Shop from './Shop'
import products from './../products.json'

const Product = () => {
	return (
		<>
			<Shop products={products} />
		</>
	)
}

export default Product

// import React, { useState, useEffect } from 'react'
// import { useParams, Redirect } from 'react-router-dom'
// import Shop from './Shop'
// import products from './../products.json'

// const Product = () => {
// 	const { id, alias } = useParams()
// 	// const [product = null] = products.filter(prod => prod.id === parseInt(id))
// 	const [productsArr, setProductsArr] = useState()

// 	useEffect(() => {
// 		// if (id) {
// 		// 	setProductsArr(products.filter(prod => prod.id === parseInt(id)))
// 		// } else {
// 		// 	setProductsArr(products)
// 		// }

// 		setProductsArr(products)
// 	}, [])

// 	// if (alias) {
// 	// 	productsArr = products.filter(prod => prod.category === alias)
// 	// }

// 	if (productsArr.length === 0) {
// 		return <Redirect to="/404.html" />
// 	}

// 	// const productsList = productsArr.map(item => {
// 	// 	return (
// 	// 		<div>
// 	// 			<h2>{item.name}</h2>
// 	// 			<p>Opis: {item.description}</p>
// 	// 			<h4>Kategoria {item.category}</h4>
// 	// 			<h3>Cena: {item.price}</h3>
// 	// 		</div>
// 	// 	)
// 	// })

// 	return (
// 		<>
// 			<Shop products={products} />
// 			{/* {productsList} */}
// 		</>
// 	)
// }

// export default Product
