import React, {useState, useEffect} from 'react';
import Shop from '../src/components/Shop';
import { useParams, Switch, Route, useHistory } from 'react-router-dom';
import products from "../src/products.json"



const Task05 = () => {
    const history = useHistory();
    const [state, setState] = useState({
        minPrice: '',
        maxPrice: '',
        searchTerm: '',
    })
    const handleSubmit = event => {
        event.preventDefault()
        const {minPrice, maxPrice, searchTerm} = event.target.elements
        
        setState({
            minPrice: minPrice.value,
            maxPrice: maxPrice.value,
            searchTerm: searchTerm.value,
        })
        history.push(
            `/task05/${minPrice.value}-${maxPrice.value}-${searchTerm.value}`
            );
        }

    const sortProducts = () => {
       console.log(state.maxPrice, state.maxPrice, state.searchTerm, ' state')
        return products.filter(item => item.price >= state.minPrice 
            && item.price <= state.maxPrice 
            && item.name.includes(state.searchTerm))

    }
    return (
        <>
            <h1>Task05</h1>
            <form onSubmit={handleSubmit}>
                <input name="minPrice" type="number" placeholder='cena minimalna'></input>
                <input name="maxPrice" type="number" placeholder='cena maksymalna'></input>
                <input name="searchTerm" type="text" placeholder='fraza'></input>
                <input type="submit" value="filter"/>
            </form>
            <Route exact path={`/task05`}>
                <Shop products={products}></Shop>
             </Route>
             <Route exact path='/task05/:min-:max-:term'>
                 <Shop products={sortProducts()}/>
             </Route>
        </>
    );
}

export default Task05;

