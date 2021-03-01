import React from 'react';
import categories from '../src/categories.json'
import { Link, Route } from 'react-router-dom';
import products from '../src/products.json'
import { useParams } from 'react-router-dom';
import Shop from '../src/components/Shop'

const Task03 = () => {
    const { id } = useParams();

    const nav = categories.map(item => (
        <li key={item.url}> <Link to={ item.url }>{ item.text} </Link> </li>
    ))


    const routes =  categories.map(category => {
    const correctProduct = products.filter(product => {
        product.id === parseInt(id)
        if (category.text === "All") {
            return product;
        } else {
            return product.category.toLowerCase() === category.text.toLowerCase()
        }

    })
        
        return (
            <Route exact key={category.url} path={category.url}>
              <Shop products={correctProduct} />
            </Route>
        )
    })



    return (
        <>
        <h1>Task03</h1>
        {nav}
        {routes}
        </>

    );
}

export default Task03;

