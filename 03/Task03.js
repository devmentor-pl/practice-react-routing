import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';

import products from './../src/products.json';
import Shop from '../src/components/Shop';
import Category from '../src/components/Category';

const Task03 = () => {
    const { path } = useRouteMatch();
    const categoryNamesArr = [...new Set(products.map(item => item.category))];
    const categoriesData = categoryNamesArr.reduce((acc, category) => {
        const categoryItem = { text: category, url: `${path}/${category.toLowerCase()}` };
        return [...acc, categoryItem];
    }, []);

    const nav = categoriesData.map(item => (
        <li key={item.url}>
            <Link to={item.url}>{item.text}</Link>
        </li>
    ));

    return (
        <>
            <h1>Task03</h1>
            <ul style={{ display: 'flex', gap: '1rem' }}>
                <li>
                    <Link to={path}>All</Link>
                </li>
                {nav}
            </ul>
            <Route exact path={path}>
                <h2>All Products</h2>
                <Shop products={products} />
            </Route>
            <Route path={`${path}/:category`}>
                <Category products={products} />
            </Route>
        </>
    );
};

export default Task03;
