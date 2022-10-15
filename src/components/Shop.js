import React from 'react';
import Product from './Product';

const Shop = ({list}) => {
    return list.map(product => <Product key={product.id} {...product} />)
}

export default Shop;