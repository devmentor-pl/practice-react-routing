import React, {useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import Shop from './../src/components/Shop';
import products from './../src/products.json';

const Task04 = () => {
    const [redirect, setRedirect] = useState(null);

    const handleChange = (e) =>{
        e.preventDefault();
        setRedirect(e.target.value);
    }
    
    const ProductsList = () => {
        redirect.endsWith('asc') 
        ? products.sort((a,b)=>a.price-b.price)
        : products.sort((a,b)=>b.price-a.price)
        return <Shop products={products}/>
    }

    return (
        <>
            <h1>Task04</h1>
            <select onChange={handleChange}>
                <option></option>
                <option value='/task04/price-asc'>cena rosnąco</option>
                <option value='/task04/price-desc'>cena malejąco</option>
            </select>
            {redirect&& <>
            <Redirect to={redirect}/>
            <Route path={redirect}>{ProductsList}</Route></>}
        </>
    );
}

export default Task04;

