import React from 'react';
import Product from './Product';
import products from "./../products.json";
import { useParams } from "react-router-dom";

const Shop = (props) => {
  const { category } = useParams();
  const { main } = props;
  console.log(category, products);
  let prodCat = [];
  if (main) {
    prodCat = products;
  } else {
    prodCat = products.filter((prod) => prod.category.includes(category));
  }
  console.log(products);
  return (
    <section>
      {prodCat.map((p) => (
        <Product {...p} />
      ))}
    </section>
  );
};

export default Shop;