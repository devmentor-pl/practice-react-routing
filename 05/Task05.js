import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';

import Shop from '../src/components/Shop';

import products from '../src/products.json';

const Task05 = () => {
    const initialState = {
        searchTerm: '',
        minPrice: '',
        maxPrice: '',
    };
    const [filters, setFilters] = useState(initialState);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { searchTerm, minPrice, maxPrice } = filters;
        history.push(`/task05/${minPrice},${maxPrice}-${searchTerm}`);
    };

    const handleChange = ({ name, value }) => setFilters({ ...filters, [name]: value });

    const form = () => (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="searchTerm">
                <input
                    type="text"
                    name="searchTerm"
                    id="searchTerm"
                    placeholder="Search for products"
                    onChange={(e) => handleChange(e.target)}
                    value={filters.searchTerm}
                />
            </label>
            <br />
            <label htmlFor="minPrice">
                <input
                    type="number"
                    name="minPrice"
                    id="minPrice"
                    placeholder="Min Price"
                    onChange={(e) => handleChange(e.target)}
                    value={filters.minPrice}
                />
            </label>
            <br />
            <label htmlFor="maxPrice">
                <input
                    type="number"
                    name="maxPrice"
                    id="maxPrice"
                    placeholder="Max Price"
                    onChange={(e) => handleChange(e.target)}
                    value={filters.maxPrice}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );

    const routes = () => (
        <Route
            path="/task05/:minPrice?,:maxPrice?-:searchTerm?"
            render={({ match }) => {
                const highestPrice = Math.max(...products.map(p => p.price));
                const { minPrice = 0, maxPrice = highestPrice, searchTerm = '' } = match.params;
                const filteredProducts = products.filter((p) => {
                    if (p.price > minPrice && p.price <= maxPrice) {
                        return p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase()) ? p : null;
                    }
                });
                return <Shop products={filteredProducts} />;
            }}
        />
    );

    return (
        <>
            <h1>Task05</h1>
            {form()}
            {routes()}
        </>
    );
};

export default Task05;
