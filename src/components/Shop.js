import React from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

const Shop = ({ products }) => {

    const params = useParams();

    const displayProducts = () => {
        let data;
        const filterProducts = products.filter(product => product.category === params.category);
        if (filterProducts.length > 0) {
            data = filterProducts.map(product => <Product key={product.id} {...product} />)
        } else {
            data = products.map(product => <Product key={product.id} {...product} />)
        }
        return data;
    }

    return (
        <section>
            {displayProducts()}
        </section>
    );
}

export default Shop;