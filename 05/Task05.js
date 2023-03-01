import React, {useState, useEffect} from 'react';
import Shop from '../src/components/Shop';
import { useParams, Switch, Route, useHistory, Redirect } from 'react-router-dom';
import products from "../src/products.json"
import ShopWithSortParams from '../src/components/ShopWithSortParams';


const Task05 = () => {
    const history = useHistory();

    const [state, setState] = useState({
        minPrice: '',
        maxPrice: '',
        searchTerm: '',
    })

    const handleChange = event => {
        const {name, value} = event.target;
        setState({
            ...state,
            [name]: value
        })
    }
    useEffect(()=>{
        const {minPrice, maxPrice, searchTerm} = state
        if(minPrice !== '' || maxPrice !== '' || searchTerm !== ''){
            history.push(
                `/task05/${minPrice}-${maxPrice}-${searchTerm}`
            )
        }else{
            history.replace('/task05')
        }
    }, [state])
        
    return (
        <>
            <h1>Task05</h1>
            <form>
                <input onChange={handleChange} value={state.minPrice} name="minPrice" type="number" placeholder='cena minimalna'></input>
                <input onChange={handleChange} value={state.maxPrice} name="maxPrice" type="number" placeholder='cena maksymalna'></input>
                <input onChange={handleChange} value={state.searchTerm} name="searchTerm" type="text" placeholder='fraza'></input>
            </form>
            <Route exact path={`/task05`}>
                <Shop products={products}></Shop>
             </Route>
             <Route path='/task05/:min?-:max?-:term?'>
                 <ShopWithSortParams products={products}/>
             </Route>
        </>
    );
}

export default Task05;

