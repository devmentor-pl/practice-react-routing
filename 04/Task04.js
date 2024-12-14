import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Shop from '../src/components/Shop';
import products from '../src/products.json';

const Task04 = () => {
    const history = useHistory();

    let sortedProducts = [...products];

    const sortType = history.location.pathname.split('/').pop();

    switch (sortType) {
        case 'price-desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'price-asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'name-desc':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'name-asc':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'id-desc':
            sortedProducts.sort((a, b) => b.id - a.id);
            break;
        case 'id-asc':
            sortedProducts.sort((a, b) => a.id - b.id);
            break;
        default:
            break;
    }

    const handleSortChange = (e) => {
        history.push(`/task04/${e.target.value}`);
    };

    return (
        <div>
            <h1>Task04</h1>
            <select onChange={handleSortChange}>
                <option value="price-desc">Cena malejąco</option>
                <option value="price-asc">Cena rosnąco</option>
                <option value="name-desc">Nazwa malejąco</option>
                <option value="name-asc">Nazwa rosnąco</option>
                <option value="id-desc">ID malejąco</option>
                <option value="id-asc">ID rosnąco</option>
            </select>

            <Switch>
                <Route path={`/task04/:sortType`}>
                    <Shop products={sortedProducts} />
                </Route>
            </Switch>
        </div>
    );
};

export default Task04;