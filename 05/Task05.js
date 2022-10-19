import React, { useState } from 'react';
import Shop from './../src/components/Shop'
import products from './../src/products.json'
import {Route, useHistory, useParams} from 'react-router-dom'

const SearchPage = () => {
    const {minPrice, maxPrice, searchTerm = ''} = useParams()
    console.log(searchTerm)

    const filterByMinPrice = (price, products) => {
        return isNaN(price) ? products : products.filter(p => p.price >= Number(price))
    }
    const filterByMaxPrice = (price, products) => {
        return isNaN(price) ? products : products.filter(p => p.price <= Number(price))
    }
    const filterBySearch = (search, products) => {
        const searchUpper = search.toUpperCase()
        return search.length === 0 ? products : products.filter(p => 
            p.name.toUpperCase().includes(searchUpper) || p.description.toUpperCase().includes(searchUpper))
        
    }

    const productAfterMinPrice = filterByMinPrice(minPrice, products)
    const productAfterMaxPrice = filterByMaxPrice(maxPrice, productAfterMinPrice)
    const productsAfterSearch = filterBySearch(searchTerm, productAfterMaxPrice)

    console.log(productAfterMinPrice)
    console.log(productAfterMaxPrice)
    console.log(productsAfterSearch)

    return <div>
        <h4>SearchPage - useParams</h4>
            <p>{minPrice}, {maxPrice}, {searchTerm}</p>
            <Shop list={productsAfterSearch}/>
        </div>
}

const Task05 = () => {
    const history = useHistory()

    const initSearch = {
        text: '',
        priceMin: '',
        priceMax: '',
    }
    const [form, setForm] = useState(initSearch)

    const onInput = e => {
        const value = e.target.value 
        const name = e.target.name
        console.log(name, value)
        setForm(prev => ({...prev, [name]: value}))
        // setForm(prev => {
        //     return {
        //         ...prev,
        //         [name]: value
        //     }
        // })
    }

    const onSubmit = e => {
        e.preventDefault()
        console.log('submit')
        history.push(`/task05/${form.priceMin},${form.priceMax},${form.text}`)
        
    }
    return (
        <div>
            <h1>Task05</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="phrase">Fraza</label>
                    <input type="text" name='text' value={form.text} onChange={onInput} />
                </div>
                <div>
                    <label htmlFor="phrase">Cena min</label>
                    <input type="text" name="priceMin" value={form.priceMin} onChange={onInput} />
                </div>
                <div>
                    <label htmlFor="phrase">Cena max</label>
                    <input type="text" name='priceMax' value={form.priceMax} onChange={onInput} />
                </div>
                <div><input type="submit" value='Send' /></div>
            </form>

            <Route path='/task05/:minPrice?,:maxPrice?,:searchTerm?'>
                <SearchPage />
            </Route>
        </div>
    );
}

export default Task05;

