import React from 'react';
import Shop from '../src/components/Shop';
import products from './../src/products.json';
import { Link, Route, useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

let newProduct = products

const Art = () => {
    const { min, max, search } = useParams()
    console.log(min)
    console.log(max)
    console.log(search)
    let minCut = min.substring(1, min.length - 1)
    let maxCut = max.substring(1, max.length - 1)
    let searchCut = search.substring(1, search.length - 1)
    console.log(minCut)
    console.log(maxCut)
    console.log(searchCut)
    newProduct = products.filter(product => {
        return product.name.toLowerCase().includes(searchCut.toLowerCase()) ||
            product.description.toLowerCase().includes(searchCut.toLowerCase())
    })
    // console.log( newProduct )
    return (
        <div>
            <h2> Art Search </h2>
            <div> {min},{max}-{searchCut}</div>
        </div>
    )
}

const Task05 = () => {
    const history = useHistory()
    const [search, setSearch] = React.useState('')
    const [min, setMin] = React.useState('')
    const [max, setMax] = React.useState('')

    const handleInput = e => {
        const value = e.target.value
        const name = e.target.name

        if (name === 'min') {
            setMin(value)
            history.push('/task05/[' + value + '],[' + max + ']-[' + search + ']')
        }
        if (name === 'max') {
            setMax(value)
            history.push('/task05/[' + min + '],[' + value + ']-[' + search + ']')
        }
        if (name === 'search') {
            setSearch(value)
            history.push('/task05/[' + min + '],[' + min + ']-[' + value + ']')
        }
    }

    return (
        <div>
            <h1>Task05</h1>
            <form>
                <label htmlFor="min">min
                    <input type="t ext" name='min' value={min} onChange={handleInput} /><br />
                </label>
                <label htmlFor="max">max
                    <input type="text" name='max' value={max} onChange={handleInput} /><br />
                </label>
                <label htmlFor="search">search
                    <input type="text" name='search' value={search} onChange={handleInput} /><br />
                </label>
            </form>
            <br />

            <Route path={'/task05/:min,:max-:search'}>
                <Art />
                <Shop products={newProduct} />
            </Route>

        </div>
    );
}

export default Task05;

