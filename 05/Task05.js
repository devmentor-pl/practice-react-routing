import React, { useState } from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect, useHistory
} from 'react-router-dom';

import products from '../src/products.json'
import ShopFilter from '../src/components/ShopFilter';

const Task05 = () => {
    const history = useHistory();

    const [searchTerm, setSearchTerm] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [minPrice, setMinPrice] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        history.push(`/task05/${minPrice},${maxPrice}-${searchTerm}`)
    }

    return (
        <Router basename='/task05'>
            <section>
                <h1>Task05</h1>
            </section>
            <form onSubmit={handleChange}>
                <label>Search phrase:
                    <input value={searchTerm} type='text' onChange={(e) => setSearchTerm(e.target.value)}></input>
                </label>
                <label>Min price:
                    <input value={minPrice} type='text' onChange={(e) => setMinPrice(e.target.value)}></input>
                </label>
                <label>Max price:
                    <input value={maxPrice} type='text' onChange={(e) => setMaxPrice(e.target.value)}></input>
                </label>
                <button>Search</button>
            </form>
            <Route path='/:min?,:max?-:text?'>
                <ShopFilter products={products} />
            </Route>
        </Router>
    );
}

export default Task05;