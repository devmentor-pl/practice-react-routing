import React from 'react';
import { Redirect, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Product = () => {
  const { id } = useParams()

  const products = [
    {
      id: 1,
      name: 'js course',
      price: 200
    },
    {
      id: 2,
      name: 'css course',
      price: 300
    },
    {
      id: 3,
      name: 'html course',
      price: 400
    }
  ]

  const [product = null] = products.filter(prod => {
    return prod.id === Number(id)
  })

  if (product === null) {
    return <Redirect to={'/task02'}/>
  }

    return (
      <>
      <p>product id: {product.id}</p>
      <p>product name: {product.name}</p>
      <p>product price: {product.price}</p>
      </>
    );
}

export default Product;