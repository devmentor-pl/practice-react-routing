import React from 'react';
import { Redirect, useParams, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Product = (product) => {
  const { category = '/', id = null} = useParams()
  const location = useLocation()
  const baseUrl = location.pathname.replace(/\/[^/]+$/, '')

  if (product === null) {
    return <Redirect to={`${baseUrl}`}/>
  }

  if (Number(id) === product.id || (category === '/' && id === null) || category === product.category.toLowerCase()) {
    return (
      <div>
      <p>product id: {product.id}</p>
      <p>product name: {product.name}</p>
      <p>product price: {product.price}</p>
      <p>product description: {product.description}</p>
      </div>
    );
  }
}

export default Product;