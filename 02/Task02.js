import React from 'react';
import { Route } from 'react-router-dom';
import products from '../src/products.json';
import Product from '../src/components/Product'

const ParticularProduct = ({ match }) => {
	const { id } = match.params;
    const productProps = products.find((prod) => {
		return prod.id === parseInt(id);
	});
    return <Product {...productProps}/>
};

const Task02 = () => {
    return (
        <>
            <h1>Task02</h1>
            <Route
				path='/task02/product-:id'
				component={ParticularProduct}
			></Route>
        </>
    );
}

export default Task02;

