// using object in props Product
// =======================
import React from 'react'
import { Redirect } from 'react-router-dom'
import products from '../src/products.json'

const Product = (props) => {
    // console.log(props)
    const id = props.match.params.id

    const [showProduct = null] = products.filter(product => product.id === +id)
    // console.log(showProduct)

    if(showProduct === null) {
        return <Redirect to='product/Error404' />
    }

    const { id: idPoduct, name, description, category, price } = showProduct

    return (
        <div>
            <h2>Product {idPoduct}</h2>

            <div>name: {name}</div>
            <div>description: {description}</div>
            <div>category: {category}</div>
            <div>price: {price}</div>
        </div>
    )
}

export default Product



// using Hook - useParams
// ======================
// import React from 'react'
// import products from '../src/products.json'
// import {useParams} from 'react-router-dom'

// const Product = (props) => {
//     const {id} = useParams()

//     const [showProduct] = products.filter(product => product.id === +id)
//     console.log(showProduct)

//     const { id: idPoduct, name, description, category, price } = showProduct

//     return (
//         <div>
//             <h2>Product {idPoduct}</h2>

//             <div>name: {name}</div>
//             <div>description: {description}</div>
//             <div>category: {category}</div>
//             <div>price: {price}</div>
//         </div>
//     )
// }

// export default Product