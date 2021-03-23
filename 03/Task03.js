import React from 'react';
import {
    Route,
    NavLink,
    useRouteMatch,
} from 'react-router-dom';

import Shop from '../src/components/Shop';

import products from '../src/products.json';

const Task03 = () => {
    const { path, url } = useRouteMatch();
    const linkedProducts = products.map((p) => ({
        ...p,
        link: `#/task02/product-${p.id}`,
    }));
    
    const nav = () => {
        const categoriesObject = new Set(products.map((product) => product.category));
        const categories = Array.from(categoriesObject);
        return categories.map((cat) => (
            <li key={cat}>
                <NavLink
                    to={`${url}/${cat.toLowerCase()}`}
                >
                    {cat}
                </NavLink>
            </li>
        ));
    };

    const routes = (
        <>
            <Route
                exact
                path={`${path}`}
                render={() => <Shop products={linkedProducts} />}
            />
            <Route
                path={`${path}/:category`}
                render={({ match }) => {
                    const filteredProducts = linkedProducts.filter(
                        (p) => p.category.toLowerCase() === match.params.category,
                    );
                    return <Shop products={filteredProducts} />;
                }}
            />
        </>
    );

    return (
        <>
            <h1>Task03</h1>
            <ul>{nav()}</ul>
            {routes}
        </>
    );
};

export default Task03;
