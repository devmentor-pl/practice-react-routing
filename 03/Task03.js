// Tym razem masz wyświetlić listę produktów przy pomocy komponentu <Shop/> i zawartości pliku ./src/products.js w zależności od kategorii, która została wprowadzona do adresu url tj.

// /task03/ => wszystkie produkty
// /task03/javascript => category=JavaScript
// /task03/react => category=React
// Każdy z wyświetlonych produktów ma prowadzić do podstrony z konkretnym produktem, którą wykonałeś w poprzednim zadaniu.

 

import React from 'react';
import { Route, useParams } from 'react-router';
import Shop from '../src/components/Shop';

import products from './../src/products.json';

const Task03 = () => {
    const CreateShop = () => {
        const { category='' } = useParams()

        const productList = products.filter(product => {
            product.link = `/#/task02/product-${product.id}`
            switch(category) {
                case 'javascript': return product.category === 'JavaScript'
                case 'react': return product.category === 'React'
                case '': return true
                default: return false
            }
        });

        if(productList.length) {
            return <Shop products={productList}/>
        } else {
            return (
                <section>
                    <p>Category not found!</p>
                </section>
            )
        }
    }
    return (
        <>
            <h1>Task03</h1>
            <Route path={ ['/task03/:category', '/task03/'] }>
                <CreateShop/>
            </Route>
        </>
    );
}

export default Task03;
	
