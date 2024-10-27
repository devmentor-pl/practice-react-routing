import React from 'react';
import Product from './Product';

const Shop = ({ list }) => {
    return list.map(p => <Product key={p.id} {...p}/>)
}

export default Shop;
