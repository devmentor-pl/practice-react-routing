import React from 'react';
import Product from './Product';
import products from "./../products.json";

const Shop = ({ products }) => {
  const prodCat = products.filter((prod) =>
    prod.category.includes(prod.category)
  );
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