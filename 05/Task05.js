import React, { useEffect, useState } from 'react';
import { Route, useHistory, useParams } from 'react-router';

import products from './../src/products.json';
import Shop from '../src/components/Shop'

const Task05 = () => {
    const history = useHistory()
    const defaultState = {
        searchTerm: '',
        minPrice: '',
        maxPrice: ''
    }
    const [state, setState] = useState(defaultState)
    
    const handleChange = e => {
        const changedItemName = e.target.name
        const changedItemValue = e.target.value

        setState( {...state, [changedItemName]:changedItemValue} )
    }

    const DisplayShop = () => {
        const {searchTerm, minPrice, maxPrice} = useParams()
        const productList = products.filter(product => {
            return (
                (searchTerm ? product.name.includes(searchTerm) : true) &&
                (minPrice ? product.price >= Number(minPrice) : true) &&
                (maxPrice ? product.price <= Number(maxPrice) : true)
            )
        })

        if(productList.length) {
            return <Shop products={productList}/>
        } else {
            return (
                <section>
                    <p>Search is empty!</p>
                </section>
            )
        }
    }
    useEffect(() => {
        history.push(`/task05/${state.minPrice},${state.maxPrice}-${state.searchTerm}`)
    }, [state.searchTerm, state.minPrice, state.maxPrice])

    return (
        <>
            <h1>Task05</h1>
            <form onChange={ handleChange } >
                <label>Search term: </label>
                <input type='text' name='searchTerm' />
                <label>Min price: </label>
                <input type='number' name='minPrice' />
                <label>Max price: </label>
                <input type='number' name='maxPrice' />
            </form>
            <Route path='/task05/:minPrice?,:maxPrice?-:searchTerm?'>
                <DisplayShop/>
            </Route>
        </>
    );
}

export default Task05;

