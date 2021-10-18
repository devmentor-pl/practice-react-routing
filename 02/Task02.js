import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../src/components/Product';
import products from '../src/products.json'
import { HashRouter as Router, Route } from "react-router-dom";

const Task02 = () => {


  const showProduct = () => {
    const { id } = useParams()
    const product = products.find(
        product => product.id === parseInt(id)
      )
      return <Product {...product} />;
    }


    return (
        <Router>
        <h1>Task02</h1>
          <Route
            path="/task02/product-:id"
            component={showProduct}
          />
        </Router>
    );
}

export default Task02;

