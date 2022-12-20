import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Shop from '../src/components/Shop';
import products from '../src/products.json';

const Task04 = () => {

    const history = useHistory();
    console.log(products);
    const handleChange = (e) => {
        history.push(e.target.value);
        console.log(history);
    }
    return (
        <>
            <h1>Task04</h1>
            <form>
                    <select onChange={handleChange}>
                        <option value='/task04/price-desc'>descending</option>
                        <option value='/task04/price-asc'>ascending</option>
                    </select>
            </form>
            <Switch>
                <Route path='/task04/price-desc'>
                    <Shop products={[...products].sort((a,b)=>b.price-a.price)}/>
                </Route>
                <Route path='/task04/price-asc'>
                    <Shop products={[...products].sort((a,b)=>a.price-b.price)}/>
                </Route>
            </Switch>

        </>
    );
}

export default Task04;

