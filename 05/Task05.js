import React, {useState} from 'react';
import {Route, useHistory, useParams} from 'react-router-dom';
import products from './../src/products.json';
import Shop from "../src/components/Shop";

const Task05 = () => {
    const history = useHistory();
    const values = {
        minPrice: '',
        maxPrice: '',
        search: '',
    }
    const [searchValues, createSearchValues] = useState(values);

    const handleChange = (event) => {
        const {name, value} = event.target;
        createSearchValues(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {maxPrice, minPrice, search} = searchValues;
        history.push(`/task05/${minPrice},${maxPrice}-${search}`)
    }

    const FilteredList = () => {
        const {minPrice, maxPrice, search} = useParams();
        const filteredProduct = products.filter(product => {
            const {name, description, price} = product;
            return (
                (
                    (search ? name.toLowerCase().includes(search.toLowerCase()) : true) ||
                    (search ? description.toLowerCase().includes(search.toLowerCase()) : true)
                ) &&
                (minPrice ? price >= parseInt(minPrice) : true) && (maxPrice ? price <= parseInt(maxPrice) : true)
            )
        });

        return <Shop products={filteredProduct}/>
    }

    return (
        <>
            <h1>Task05</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="searchTerm">Search product:</label>
                <input type="text" id='search' placeholder="Search" name='search' onChange={handleChange}/>
                <label htmlFor="minPrice">Min price:</label>
                <input type="number" id='minPrice' placeholder="Min price" name='minPrice' onChange={handleChange}/>
                <label htmlFor="maxPrice">Max price:</label>
                <input type="number" id='maxPrice' placeholder="Max price" name='maxPrice' onChange={handleChange}/>
                <button type='submit'>Search</button>
            </form>
            <Route path={['/task05/:minPrice?,:maxPrice?-:search?', '/task05/']}>
                <FilteredList/>
            </Route>
        </>
    );
}
export default Task05;

