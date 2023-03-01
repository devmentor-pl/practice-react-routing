import React from 'react';
import Product from './Product';
const Shop = (props) => {
    const {products} = props

    return (
        <section>
           { products.map(p => <Product key={p.id} {...p} />)}
         </section>
    );
}

export default Shop;