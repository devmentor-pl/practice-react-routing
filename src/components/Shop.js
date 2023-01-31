import React from 'react';
import Product from './Product';
import products from "./../products.json";
import { useParams } from "react-router-dom";

const Shop = () => {
  const { category } = useParams();
  console.log(category);
  const prodCat = products.filter((prod) => prod.category.includes(category));
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