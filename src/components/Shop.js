import React from "react";
import Product from "./Product";

const Shop = ({ products }) => {
  return (
    <section>
      {products.map(p => (
        <Product key={p.id} {...p} link={`/task02/product-${p.id}`} />
      ))}
    </section>
  );
};

export default Shop;
