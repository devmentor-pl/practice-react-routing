import React from 'react';
import { Route, useParams, Link } from 'react-router-dom';
import products from '../src/products.json';

const Product = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return <p>Product not found</p>;
    }
    return (
        <div style={{ padding: '10px', lineHeight: '2', border: '2px solid blue' }}>
            <h1 style={{ borderBottom: '2px solid #000', paddingBottom: '10px' }}>
                Products
            </h1>
            <p>Product ID: {product.id}</p>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
        </div>
    );
};
const Task02 = () => {
    return (
        <>
            <h1>Task02</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/task02/product-${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>

            <Route path="/task02/product-:id">
                <Product />
            </Route>
        </>
    );
};

export default Task02;