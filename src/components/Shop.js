import React from 'react';
import Product from './Product';

const Shop = ({ list }) => {
    console.log(list)
    return list.map(p => <Product {...p} />)
}

export default Shop;