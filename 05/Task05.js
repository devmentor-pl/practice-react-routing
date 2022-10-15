import React, { useState } from 'react';
import { Route, useHistory, useParams } from 'react-router-dom';

import Shop from './../src/components/Shop';
import products from './../src/products.json';

const SearchPage = () => {
    const { minPrice, maxPrice, searchTerm='' } = useParams()

    function filterByMinPrice(price, products) {
        return Number.isNaN(price) ? products : products.filter(p => p.price >= price)
    }

    function filterByMaxPrice(price, products) {
        return Number.isNaN(price) ? products : products.filter(p => p.price <= price)
    }

    function filterBySearchTerm(searchTerm, products) {
        const searchTermToLowerCase = searchTerm.toLowerCase()
        return searchTerm.length === '' ? products : products.filter(p => (
            p.name.toLowerCase().includes(searchTermToLowerCase) || p.description.toLowerCase().includes(searchTermToLowerCase)
        ))
    }

    const productsFilteredMinPrice = filterByMinPrice(Number(minPrice), products)
    const productsFilteredMaxPrice = filterByMaxPrice(Number(maxPrice), productsFilteredMinPrice)
    const productsFilteredSearchTerm = filterBySearchTerm(searchTerm, productsFilteredMaxPrice)

    return <Shop list={productsFilteredSearchTerm} />
}

const Task05 = () => {
    const initialValues = {
        searchTerm: '',
        minPrice: '',
        maxPrice: ''
    }
    
    const [form, setForm] = useState(initialValues)
    const history = useHistory()

    function handleChange(e) {
        const value = e.target.value
        const name = e.target.name

        setForm((state) => {
            return {
                ...state,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const { searchTerm, minPrice, maxPrice } = form

        history.push(`/task05/${minPrice},${maxPrice}-${searchTerm}`)
    }

    return (
        <>
            <h1>Task05</h1>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label>szukaj</label>
                    <input 
                        type="text"
                        name="searchTerm"
                        value={form.searchTerm}
                        onChange={ handleChange }
                    />
                </div>
                <div>
                    <label>minimalna cena</label>
                    <input 
                        type="number"
                        name="minPrice"
                        value={form.minPrice}
                        onChange={ handleChange }
                    />
                </div>
                <div>
                    <label>maksymalna cena</label>
                    <input 
                        type="number"
                        name="maxPrice"
                        value={form.maxPrice}
                        onChange={ handleChange }
                    />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>

            <Route path="/task05/:minPrice?,:maxPrice?-:searchTerm?">
                <SearchPage />
            </Route>
        </>
    );
}

export default Task05;

