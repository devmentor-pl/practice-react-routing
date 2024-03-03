import React from 'react';
import { HashRouter as Router, Route, Switch, useParams } from "react-router-dom";
import products from './../src/products.json';
import Shop from "../src/components/Shop";

const Task03 = () => {
    return (
        <Router>
            <h1>Task03</h1>
            <Switch>
                <Route exact path='/task03'>
                    <Shop products={products}/>
                </Route>
                <Route path='/task03/:category'>
                    <ShopWithCategory />
                </Route>
            </Switch>
        </Router>
    );
}

const ShopWithCategory = () => {
    const { category } = useParams();
    const filteredProducts = products.filter(product => product.category.toLocaleLowerCase() === category);
    return <Shop products={filteredProducts} />;
}

export default Task03;