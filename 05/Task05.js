import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';

import Shop from '../src/components/Shop';

import products from '../src/products.json';
import inputFields from '../src/inputFields';

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

    const renderInputFields = () => inputFields.map(({ name, type, placeholder }) => (
        <label htmlFor={name} key={name}>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={(e) => handleChange(e.target)}
                value={filters[name]}
            />
        </label>
    ));

    const form = (
        <form onSubmit={(e) => handleSubmit(e)}>
            {renderInputFields()}
            <button type="submit">Submit</button>
        </form>
    );

    function checkIfInSearchRange(product, match) {
        const highestPrice = Math.max(...products.map((p) => p.price));
        const {
            minPrice = 0,
            maxPrice = highestPrice,
            searchTerm = '',
        } = match.params;

        const priceMatch = product.price > minPrice && product.price <= maxPrice;
        const queryMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());

        if (priceMatch && queryMatch) {
            return product;
        }
        return null;
    }

    const routes = (
        <Route
            path="/task05/:minPrice?,:maxPrice?-:searchTerm?"
            render={({ match }) => {
                const filteredProducts = products.filter((p) => checkIfInSearchRange(p, match));
                return <Shop products={filteredProducts || products} />;
            }}
        />
    );

    return (
        <>
            <h1>Task05</h1>
            {form}
            {routes}
        </>
    );
};

export default Task05;
