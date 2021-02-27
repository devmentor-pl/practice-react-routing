import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../src/components/Product';
import products from '../src/products.json'
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const Task02 = () => {


  const showProduct = () => {
    /*czemu tu filter nie działa ? */
    const { id } = useParams()
    const product = products.find(
        product => product.id === parseInt(id)
      )
      return <Product {...product} />;
    }
  
 
    return (
        <>
        <h1>Task02</h1>
          <Route
            path="/task02/product-:id"
            component={showProduct}
          />
        </>
    );
}

export default Task02;

