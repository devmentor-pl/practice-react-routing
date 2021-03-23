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

    const route = useRouteMatch();
    const { category } = useParams();
    const loca = useLocation();

    return (
        <>
            <h1>Task03</h1>
            <Switch>
                
                <Route 
                    path="/task03/"
                    exact
                    render={props => {
                        return <Shop products={products}/>
                        }
                    }/>

                <Route path="/task03/:category" render={({match}) => {
                    return products.map(product => {
                        if (product.category.toLowerCase() == match.params.category) {
                            return (
                                <Shop
                                    products={products.filter(
                                        (p) =>
                                            p.category.toLowerCase() ==
                                            match.params.category
                                    )}
                                />
                            );
                        }
                    })
                }} />
            </Switch>
        </>
    );
}

export default Task03;

