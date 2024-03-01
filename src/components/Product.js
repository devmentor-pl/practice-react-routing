import React from "react";
import { useParams } from "react-router-dom";
import products from '../products.json';

const Product = ({name, description}) => {
  // const { id } = useParams();
  // const [product = null] = products.filter((prd) => prd.id === parseInt(id));
  // if (product === null) {
  //   return console.log("strona nie istnieje");
  // }

  // const { name, description } = product;
  // return (
  //   <article data-id={id}>
  //     <h1> id:{id} {name} </h1>
  //     <p> {description} </p>
  //   </article>
  // );
  return (
    <article>
      <h1>{name}</h1>
      <p>{description}</p>
    </article>
  )
  
 

};

export default Product;
