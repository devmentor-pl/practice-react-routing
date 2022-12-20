import React, { useState } from 'react';
import { Route, useHistory, useParams } from 'react-router-dom';
import Shop from '../src/components/Shop';
import products from '../src/products.json';

const Task05 = () => {
    const params = useParams();
    console.log(params);
    const history = useHistory();
    const [form, setForm] = useState({ minPrice: '', maxPrice: '', term: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { minPrice, maxPrice, term } = form;
        history.push(`/task05/${minPrice},${maxPrice}-${term}`);

    }
    const handleChange = (e) => {
        setForm(prevState=>({...prevState,[e.target.name]:e.target.value.toLowerCase()}))
    }

    const FilterProducts = () => {
        const {minPrice, maxPrice, searchTerm=''} = useParams()
        const searchedProducts = products.filter(item => item.name.toLowerCase().includes(`${searchTerm}`) && item.price >= parseInt(minPrice) && item.price <= parseInt(maxPrice))
        console.log(searchedProducts);
        return <Shop products={searchedProducts}/>
    }

    return (
        <>
            <h1>Task05</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='minPrice'>min price<input onChange={handleChange} value={form.minPrice} id='minPrice' name='minPrice' type='number'></input></label>
                <label htmlFor='maxPrice'>max price<input onChange={handleChange} value={form.maxPrice} id='maxPrice' name='maxPrice' type='number'></input></label>
                <label htmlFor='term'>search term<input onChange={handleChange} value={form.term} id='term' name='term' type='text'></input></label>
                <button type='submit'>Search</button>
            </form>
            <Route path='/task05/:minPrice?,:maxPrice?-:searchTerm?'>
                <FilterProducts/>
            </Route>
        </>
    );
}

export default Task05;

