import React from 'react';
import products from './../src/products.json'
import { Switch, Route, useParams, Redirect } from 'react-router-dom';
import ProductComponent from './../src/components/Product';

const Product = () => {
    const {id} = useParams();
    const [product=null] = products.filter(item=>item.id===parseInt(id))
    
    if (product===null) {
        return <Redirect to='/404.html'/>
    }
    
    const {id:idProd} = product
    
    // zastanawiałąm się czy powinnam umieszczać w liscie skoro wyswietlany jest jeden produkt a nie cala lista ?
    return(
        <ul>    
            <li key={idProd}><ProductComponent {...product}/></li>
        </ul>
    )
}

const Task02 = () => {

    return (
        <>
            <h1>Task02</h1>
            <Switch>
                <Route exact path='/task02/:product-:id'><Product/></Route>
            </Switch>
        </>
    );
}

export default Task02;

