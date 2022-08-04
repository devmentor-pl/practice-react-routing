import React from 'react';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import products from '../products.json'

const Products = () => {

    const {id, alias} = useParams()
    const [product = null] = products.filter(prod => prod.id === parseInt(id))

    if(product === null) {
        return <Redirect to='/404.html'/>
    }

    const {name, category, description, price } = product 
    
    return (
        <article data-id={id} data-alias={alias}>
            <h3>{name}</h3>
            <h4>Cena: {price} zł</h4>
            <p>{description}</p>
            <p>{category}</p>
        </article>
    );
}

export default Products;