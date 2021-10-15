import React from 'react';
import {Route, useParams, Redirect} from 'react-router-dom';

import Shop from "../src/components/Shop";
import products from './../src/products.json';

const Task03 = () => {
    const DisplayShop = () => {
        const { cat='' } = useParams()

        const productList = products.filter(product => {
            product.link = `/task02/product-${product.id}`
            switch(cat) {
                case 'javascript': 
                    return product.category === 'JavaScript'
                case 'react': 
                    return product.category === 'React'
                case '': 
                    return true
                default: 
                    return false
            }
        })

        if(productList.length) {
            return <Shop products={productList}/>
        } else {
            return (
                <Redirect to='/404.html'/> 
            )
        }
    }

    return (
        <>
            <h1>Task03</h1>
            <Route path={ ['/task03/:cat', '/task03/'] }>
                <DisplayShop/>
            </Route>
        </>
    );
}

export default Task03;

