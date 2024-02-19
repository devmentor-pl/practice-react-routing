import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Product from '../src/components/Product'; 


const Navigation = () => (
    <nav>
        <NavLink to="/task02/product-1">Produkt 1</NavLink> |
        <NavLink to="/task02/product-2">Produkt 2</NavLink> |
        <NavLink to="/task02/product-3">Produkt 3</NavLink> |
        <NavLink to="/task02/product-4">Produkt 4</NavLink>
    </nav>
);
  
const Task02 = () => {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/task02" component={() => <h1>Witaj w sklepie!</h1>} />
                <Route path="/task02/product-:id" component={Product} />
            </Switch>
        </Router>
    );
}

export default Task02;