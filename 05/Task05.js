import React, {useState} from 'react';
import {Route, useHistory, useParams} from 'react-router-dom';

import products from './../src/products.json';
import Shop from "../src/components/Shop";

const Task05 = () => {
    const history = useHistory();
    const initialValues = {
        searchTerm: '',
        minPrice: '',
        maxPrice: '',
    }
    
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValues(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {maxPrice, minPrice, searchTerm} = formValues;
        history.push(`/task05/${minPrice},${maxPrice}-${searchTerm}`)
    }

    const DisplayContent = () => {
        const {minPrice, maxPrice, searchTerm} = useParams();
        const filteredProductList = products.filter(product => {
            const {name, description, price} = product;
            return (
                (
                    (searchTerm ? name.toLowerCase().includes(searchTerm.toLowerCase()) : true) ||
                    (searchTerm ? description.toLowerCase().includes(searchTerm.toLowerCase()) : true)
                ) &&
                (minPrice ? price >= parseInt(minPrice) : true) &&
                (maxPrice ? price <= parseInt(maxPrice) : true)
            )
        });


        return <Shop products={filteredProductList}/>
    }

    return (
        <>
            <h1>Task05</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="searchTerm">Search Term:</label>
                <input type="text" name='searchTerm' onChange={handleChange}/>
                <label htmlFor="minPrice">Min price:</label>
                <input type="number" name='minPrice' onChange={handleChange}/>
                <label htmlFor="maxPrice">Max price:</label>
                <input type="number" name='maxPrice' onChange={handleChange}/>
                <button type='submit'>Search</button>
            </form>
            <Route path={['/task05/:minPrice?,:maxPrice?-:searchTerm?', '/task05/']}>
                <DisplayContent/>
            </Route>
        </>
    );
}

export default Task05;

