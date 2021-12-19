import React from 'react';
import Product from './Product';

const Shop = ({ products, sort = '' }) => {
    return (
        <section>
            { products
                .sort((a, b) => {
                    if(sort === 'asc') {
                        return a.price - b.price;
                    } else {
                        return b.price - a.price;
                    }
                })
                .map(p => <Product key={ p. id } {...p} />)}
        </section>
    );
}

export default Shop;