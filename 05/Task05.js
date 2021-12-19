import React, { useState } from 'react';
import { Route, useHistory, useParams } from 'react-router-dom';

import products from './../src/products.json';

const FilteredPage = () => {
    const { min, max, text } = useParams();
    const list =
        products
            .filter(product => {
                if(product.price <= max && product.price >= min && product.name.toLowerCase().includes(text)) {
                    return product;
                };
                return null
            })
            .map(el => <li key={ el.id }>{ el.name }</li>);

    return (
        <div>
            <h4>Podane parametry to:</h4>
            <p>Fraza: { text }, wartość minimalna: { min }, wartość maksymalna: { max }</p>
            <ul>{ list }</ul>
        </div>
    )
}

const Task05 = () => {
    const init = {
        text: '',
        min: 0,
        max: 100
    }

    const [ data, setData ] = useState(init);
    const history = useHistory();

    const formHandler = e => {
        e.preventDefault();
        history.push(`/task05/${data.min},${data.max}-${data.text.toLowerCase()}`);
    }

    const saveData = e => {
        const { value, name } = e.target;
        setData(state => {
            const newState = { ...state, [name]: value };
            return newState;
        });
    }

    return (
        <>
            <h1>Task05</h1>
            <form onSubmit={ formHandler }>
                <label htmlFor="text">Szukana fraza</label>
                <input type="text" name="text" value={ data.value } onChange={ saveData } />
                <label htmlFor="min">Min</label>
                <input type="number" name="min" value={ data.min } onChange={ saveData } />
                <label htmlFor="min">Max</label>
                <input type="number" name="max" value={ data.max } onChange={ saveData } />
                <input type="submit" />
            </form>
            <Route exact path="/task05/:min,:max-:text">
                <FilteredPage />
            </Route>
        </>
    );
}

export default Task05;

