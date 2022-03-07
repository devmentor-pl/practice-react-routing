import React from 'react';
import Shop from './../src/components/Shop'
import {Link, Route} from 'react-router-dom'
import products from './../src/products.json'
import categories from './../src/categories.json';


const Task03 = () => {
    const nav = categories.map(item=>(
        <li key={item.id}><Link to={`/task03/${item.url}`}>{item.category}</Link></li>
    ))
    
    const routes = categories.map(item=>{
        const prodCat = products.filter(prod=>prod.category===item.category);
        return (
            <Route key={item.id} path={`/task03/${item.url}`}>
              <Shop products={prodCat}/>
            </Route>
        )
    })

    return (
        <>
            <h1>Task03</h1>
            {nav}{routes}
        </>
        
    );
}

export default Task03;


