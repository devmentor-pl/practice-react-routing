import React from 'react';
import { useParams } from 'react-router-dom';

import * as h from '../helpers';
import Shop from './Shop';

function Category({ products }) {
    const { category } = useParams();
    const filteredProducts = products.filter(prod => prod.category.toLowerCase() === category);
    const categoryTitle = h.capitalizeFirstLetter(category);

    return (
        <>
            <h2>{categoryTitle}</h2>
            <Shop products={filteredProducts} />
        </>
    );
}

export default Category;
