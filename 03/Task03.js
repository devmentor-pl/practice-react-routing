import React from 'react';
import { v4 as uuid } from 'uuid';
import {Route, HashRouter as Router} from 'react-router-dom';
import Shop from '../src/components/Shop'
import products from './../src/products.json';

const categories = getCategories()

function getCategories() {
    const allCategories = products.map(prod => prod.category)
    const categoriesNotDuplicated = new Set(allCategories);
    const categories = [];
    categoriesNotDuplicated.forEach(category => {
        const categoryData =  {name: category.toLowerCase(), key: uuid()};
        categories.push(categoryData)
    });
    return categories
}

function filterByCategory(category) {
    return products.filter(prod => prod.category.toLowerCase() === category)
}

function createRoutesWithCategories() {
    return categories.map(({name, key}) => {
        return <Route key={key} path={`/task03/${name}`}><Shop products={filterByCategory(name)}/></Route>
    })
}

const Task03 = () => {
    return (
        <Router>
            <h1>Task03</h1>
            <Route exact path='/task03/'><Shop products={products}/></Route>
            {createRoutesWithCategories()}
        </Router>
    );
}

export default Task03;

