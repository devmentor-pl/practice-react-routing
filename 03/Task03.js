import React from 'react';
import Shop from '../src/components/Shop';
import products from './../src/products.json';
import { Switch, Route } from 'react-router-dom';


const Task03 = () => {
    const filterProducts = (category) => {
       return products.filter(p => p.category === category)
    }
    return (
        <>
            <h1>Task03</h1>
     
                <Route exact path={`/task03`}>
                    <Shop products={products}></Shop>
                </Route>
                <Route path={`/task03/javascript`}>
                    <Shop products={filterProducts('JavaScript')}></Shop>
                </Route>
                <Route path={`/task03/react`}>
                    <Shop products={filterProducts('React')}></Shop>
                </Route>
      
        </>
    );
}

export default Task03;

