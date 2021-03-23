import React from 'react';
import { useRouteMatch } from 'react-router-dom'
import Product from './Product';

const Shop = ({products}) => {
    return (
        <section>
            { products.map(p => <Product key={p.id} {...p} />)}
        </section>
    );
}

export default Shop;