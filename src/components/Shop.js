import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Product } from "./Product";

const Shop = ({ products }) => {
  const { category } = useParams();
  const productsInCategory = products.filter(
    (product) => category === product.category.toLowerCase()
  );

  if (productsInCategory.length === 0) return <Redirect to={"/404"} />;

  return (
    <section>
      {productsInCategory.map((product) => (
        <Product
          key={product.id}
          {...product}
          link={`/task03/${product.category}`}
        />
      ))}
    </section>
  );
};

export default Shop;
