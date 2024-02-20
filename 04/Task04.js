import React , { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import products from './../src/products.json';
import Shop from '../src/components/Shop';

const Task04 = () => {
    const history = useHistory();
    const [sort, setSort] = useState('');

    const handleSortChange = (e) => {
        const selectedSort = e.target.value;
        setSort(selectedSort);
        history.push(`/task04/${selectedSort}`);
    };

    const sortProducts = (products, sort) => {
        switch (sort) {
            case 'price-desc':
                return [...products].sort((a, b) => b.price - a.price);
            case 'price-asc':
                return [...products].sort((a, b) => a.price - b.price);
            case 'name-asc':
                return [...products].sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc':
                return [...products].sort((a, b) => b.name.localeCompare(a.name));
            default:
                return products;
        }
    };

    return (
        <Router>
            <div>
                <h1>Task04</h1>
                <select value={sort} onChange={handleSortChange}>
                    <option value="">Wybierz sortowanie</option>
                    <option value="price-desc">Cena malejąco</option>
                    <option value="price-asc">Cena rosnąco</option>
                    <option value="name-asc">Nazwa A-Z</option>
                    <option value="name-desc">Nazwa Z-A</option>
                </select>

                <Switch>
                    <Route exact path="/task04">
                        <Redirect to="/task04/price-asc" />
                    </Route>
                    <Route path="/task04/:sort" render={({ match }) => {
                        const { sort } = match.params;
                        const sortedProducts = sortProducts(products, sort);
                        return <Shop products={sortedProducts} />;
                    }} />
                </Switch>
            </div>
        </Router>
    );
}

export default Task04;

