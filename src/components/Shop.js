import React from 'react';
import Product from './Product';
import { Route, useHistory, useParams } from 'react-router-dom';


const Shop = ({products}) => {
    return (
        <section>
            { products.map(p => <Product key={p.id} {...p} />)}
        </section>
    );
}

export default Shop;