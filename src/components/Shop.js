import React from 'react';
import RenderProduct from "./RenderPRoducts";

const Shop = ({ products }) => {
  return (
    <section>
      {products.map((p) => (
        <RenderProduct key={p.id} {...p} />
      ))}
    </section>
  );
};

export default Shop;
