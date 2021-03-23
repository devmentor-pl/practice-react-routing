import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch,
    useLocation,
    useParams,
} from 'react-router-dom';

import Shop from '../src/components/Shop';

import products from './../src/products.json';

const Task03 = () => {
    const categoriesObject = new Set(products.map(product => product.category));
    const categories = Array.from(categoriesObject);

    const { path } = useRouteMatch();
    // const { category } = useParams();
    // const loca = useLocation();

    return (
        <>
            <h1>Task03</h1>
            <Switch>
                <Route
                    exact
                    path={`${path}`}
                    render={(props) => {
                        return <Shop products={products} />;
                    }}
                />

                <Route
                    path={`${path}/:category`}
                    render={({ match }) => {
                        const filteredProducts = products.filter(p => {
                            return (
                                p.category.toLowerCase() ===
                                match.params.category
                            );
                        })
                        return <Shop products={filteredProducts} />
                    }}
                />
            </Switch>
        </>
    );
}

export default Task03;

