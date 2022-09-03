import React from 'react';
import Shop from '../src/components/Shop';
import products from './../src/products.json';
import { Link, Route, Switch } from 'react-router-dom';

const Task04 = () => {
    function compareUp(a, b) {
        if (a.price < b.price) {
            return -1;
        }
        if (a.price > b.price) {
            return 1;
        }
        return 0;
    }
    function compareDown(a, b) {
        if (a.price > b.price) {
            return -1;
        }
        if (a.price < b.price) {
            return 1;
        }
        return 0;
    }

    const productsSortUp = [...products].sort(compareUp);
    const productsSortDown = [...products].sort(compareDown);
    return (
        <div>
            <h1>Task04</h1>
            <ul>
                <li>
                    <Link to="/task04/price-desc">Products price-desc</Link>
                </li>
                <li>
                    <Link to='/task04/price-asc'>Products price-asc</Link>
                </li>
            </ul>
            <hr />

            <Switch>
                <Route path='/task04/price-desc'>
                    <Shop products={productsSortUp} />
                </Route>
                <Route path='/task04/price-asc'>
                    <Shop products={productsSortDown} />
                </Route>
            </Switch>
        </div>
    );
}

export default Task04;

