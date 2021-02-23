import React from 'react';
import {useHistory, Route, HashRouter as Router} from 'react-router-dom';
import Shop from '../src/components/Shop'
import products from './../src/products.json';

const sortingFuncs = {
    sortByPriceAsc: () => {return [...products].sort((a, b) => a.price - b.price)},
    sortByPriceDesc: () => {return [...products].sort((a, b) => b.price - a.price)},
    sortById: () => {    return [...products].sort((a, b) => a.id - b.id)
    },
    sortByAlphabetAZ: () => {return [...products].sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
    });},
    sortByAlphabetZA: () => { return [...products].sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        return (aName < bName) ? 1 : (aName > bName) ? -1 : 0;
    });}
}

const Task04 = () => {
    const mainPath = `/task04`;
    const history = useHistory();
    const options = [
		{ path: mainPath, innerText: '-' },
		{ path: 'sortByPriceAsc', innerText: 'price ascending' },
		{ path: 'sortByPriceDesc', innerText: 'price descending' },
		{ path: 'sortByAlphabetAZ', innerText: 'alphabetically A-Z' },
		{ path: 'sortByAlphabetZA', innerText: 'alphabetically Z-A' },
		{ path: 'sortById', innerText: 'product ID' },
	];

    function renderOptions() {
        return options.map(({path, innerText}) => <option key={path} value={path}>{innerText}</option>)
    }

    function renderRoutes() {
        return options.map(({path}) => {
            if(path === mainPath) {
                return <Route exact key={path} path={path}><Shop products={products}/></Route>;
            } else {
                const innerPath = `${mainPath}/${path}`;
                return <Route key={path} path={innerPath}><Shop products={sortingFuncs[path]()}/></Route>;
            }
        })
    }

    function handleChange({target: {value}}) {
        if(value === mainPath) {
            history.push(mainPath)
        } else {
            const path = `${mainPath}/${value}`;
            history.push(path)
        }
    }

    return (
        <>
            <h1>Task04</h1>
            <label htmlFor="sort">Sort by: 
                <select name='sort' onChange={e => handleChange(e)}>
                    {renderOptions()}
                </select>
            </label>
            {renderRoutes()}

        </>
    );
}

export default Task04;

