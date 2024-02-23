import React from "react";
import products from "../products.json";
import { Redirect, useParams, Link } from "react-router-dom";

const Product = ({ name, description, price, link = null }) => {
    const productTitle = link ? <Link to={link}>{name}</Link> : name;
  
    return (
      <article>
        <h3>{productTitle}</h3>
        <p>Price: {price} zł</p>
        <p>{description}</p>
      </article>
    );
};


const ProductPage = () => {
    const { id } = useParams();
    const product = products.find((product, index) => index.toString() === id);
  
    if (!product) {
      return <Redirect to="/404" />;
    }
  
    return <Product {...product} />;
};

export { Product, ProductPage };