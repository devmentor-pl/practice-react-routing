import React from 'react';
import products from '../src/products.json'
import { useHistory, useParams, Route } from 'react-router-dom'
import Shop from '../src/components/Shop'

const Search = () => {

    const { minPrice, maxPrice, phrase = '' } = useParams();

    function filterByMinPrice(price, products) {
        return Number.isNaN(price) ? products : products.filter(p => p.price >= price);
    }

    function filterByMaxPrice(price, products) {
        return Number.isNaN(price) ? products : products.filter(p => p.price <= price);
    }

    function filterBySearchTerm(phrase, products) {
        const phraseLowerCase = phrase.toLowerCase();
        return phrase.length === '' ? products
            : products.filter(product => (
                product.name.toLowerCase().includes(phraseLowerCase)
                || product.description.toLowerCase().includes(phraseLowerCase)
            )
            );
    }

    const productsAfterMinPrice = filterByMinPrice(Number(minPrice), products);
    const productsAfterMaxPrice = filterByMaxPrice(Number(maxPrice), productsAfterMinPrice);

    const productsAfterSearchTerm = filterBySearchTerm(phrase, productsAfterMaxPrice);


    return <Shop products={productsAfterSearchTerm} />

}

const Task05 = () => {
    const initialValues = {
        phrase: '',
        minPrice: '',
        maxPrice: ''
    }

    const [state, setState] = React.useState(initialValues)
    const history = useHistory()

    const onChange = e => {
        const name = e.target.name
        const value = e.target.value
        setState((state) => {
            return {
                ...state,
                [name]: value
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const { phrase, minPrice, maxPrice } = state
        history.push(`/task05/${minPrice},${maxPrice}-${phrase}`)

    }

    return (
        <>
            <h1>Task05</h1>
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Search phrase:</label>
                <input name='phrase' value={state.phrase} onChange={onChange} />
                <label>Min Price:</label>
                <input name='minPrice' value={state.minPrice} onChange={onChange} />
                <label>Max Price:</label>
                <input name='maxPrice' value={state.maxPrice} onChange={onChange} />
                <button>FILTER</button>
            </form>

            <Route path='/task05/:minPrice?,:maxPrice?-:phrase?'>
                <Search />
            </Route>
        </>

    );
}

export default Task05;

