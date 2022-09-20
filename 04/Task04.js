import React from 'react';
import Shop from '../src/components/Shop';
import products from './../src/products.json';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom'

const Task04 = () => {
    function compareUp(a, b) {
        if (a.price > b.price) {
            return -1;
        }
        if (a.price < b.price) {
            return 1;
        }
        return 0;
    }
    function compareDown(a, b) {
        if (a.price < b.price) {
            return -1;
        }
        if (a.price > b.price) {
            return 1;
        }
        return 0;
    }

    const productsSortUp = [...products].sort(compareUp);
    const productsSortDown = [...products].sort(compareDown);

    // redirect for select
    const history = useHistory()
    const handleSelect = e => {
        console.log('select')
        setSelect(e.target.value)
        history.push(e.target.value)
    }

    const [select, setSelect] = React.useState('')
    console.log(select)

    return (
        <div>
            <h1>Task04</h1>
            <h3>Sort by Link</h3>
            <ul>
                <li>
                    <Link to='/task04/price-desc'>Products price-desc - Ceny malejąco</Link>
                </li>
                <li>
                    <Link to="/task04/price-asc">Products price-asc - Ceny rosnąco</Link>
                </li>
            </ul>
            <hr />
            <h3>Sort by select</h3>
            <select onChange={handleSelect}>
                <option value="/task04">Wybierz sort</option>
                <option value="/task04/price-desc">Cena malejąco - Sort desc</option>
                <option value="/task04/price-asc">Cena rosnąco - Sort asc</option>
            </select>
            <br /><hr />

            {/* redirect for Link */}
            <Switch>
                <Route path='/task04/price-desc'>
                    <Shop products={productsSortUp} />
                </Route>
                <Route path='/task04/price-asc'>
                    <Shop products={productsSortDown} />
                </Route>
            </Switch>

            <br /><hr /><br />

        </div>
    );
}

export default Task04;

