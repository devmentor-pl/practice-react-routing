import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import products from './../src/products.json';
import Shop from '../src/components/Shop';

const Task03 = () => {
    return (
        <Router>
            <div>
                <h1>Task03</h1>
                <nav>
                    <Link to="/task03">Wszystkie Produkty</Link> | 
                    <Link to="/task03/javascript">JavaScript</Link> | 
                    <Link to="/task03/react">React</Link>
                </nav>
                <Switch>
                    <Route exact path="/task03" render={() => <Shop products={products} />} />
                    <Route path="/task03/:category" render={({ match }) => {
                        const { category } = match.params;
                        const filteredProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
                        return <Shop products={filteredProducts} />;
                    }} />
                </Switch>
            </div>
        </Router>
    );
}

export default Task03;

