import React from 'react';
import Shop from '../src/components/Shop';
import products from './../src/products.json';
import {Link, Route, useParams} from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Art = () => {
    const {search} = useParams()
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
        history.push('/task05/'+value)
    }
    return (
        <div>
            <h1>Task05</h1>
            <form>
                <input type="text" value={search} onChange={handleInput}/>
            </form>
            <br />
            {
                search && <Link to='/task05/ddd'>Products price-desc - Ceny malejąco</Link>
            }

            <Route path={'/task05/:search'}>
                <Art />
            </Route>
            <Shop products={products}/>
            


        </div>
    );
}

export default Task05;

