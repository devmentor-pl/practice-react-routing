import React from 'react';
import Shop from '../src/components/Shop';
import products from './../src/products.json';
import { Link, Route, useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

let newProduct = products

const Art = () => {
    const { search } = useParams()
    // newProduct = products.filter(product => product.name.includes(search))
    newProduct = products.filter(product => {
        return product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase())
    })
    console.log( newProduct )
    return (
        <h2>Hello Art {search} </h2>
    )
}

const Task05 = () => {
    const history = useHistory()
    const [search, setSearch] = React.useState('')
    const handleInput = e => {
        const value = e.target.value
        setSearch(value)
        history.push('/task05/' + value)
    }
    return (
        <div>
            <h1>Task05</h1>
            <form>
                <input type="text" value={search} onChange={handleInput} />
            </form>
            <br />

            <Route path={'/task05/:search'}>
                <Art />
                <Shop products={newProduct} />
            </Route>

        </div>
    );
}

export default Task05;

