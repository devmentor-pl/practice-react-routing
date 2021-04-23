import React, { useEffect } from 'react';
import { Route, useHistory, useParams } from 'react-router';

import products from './../src/products.json';
import Shop from '../src/components/Shop'

const Task04 = () => {
    const DisplayShop = () => {
        const {item, order} = useParams()
        const productList = products.sort((p1, p2) => {
            if(order === 'desc') {
                return ( (p2[item]) - (p1[item]) )
            } else return ( (p1[item]) - (p2[item]) )
        })

        return <Shop products={productList}/>
    }
    const history = useHistory()
    const handleChange = e => {
        history.push( e.target.value )
    }

    useEffect(() => {
        history.push( '/task04/price-desc' )
    },[])

    return (
        <>
            <h1>Task04</h1>
            <select onChange={ handleChange }>
                <option value='/task04/price-desc'>Cena malejąco</option>
                <option value='/task04/price-asc'>Cena rosnąco</option>
                <option value='/task04/id-desc'>ID malejąco</option>
                <option value='/task04/id-asc'>ID rosnąco</option>
            </select>
            <Route path='/task04/:item-:order'>
                <DisplayShop/>
            </Route>
        </>
    );
}

export default Task04;

