import React from "react";
import { Redirect, useParams, Route } from "react-router-dom";
import { Product } from "./Product";
import products from "../products.json";

const Shop = ({ products }) => {
    return (
      <section>
        {products.map((product, index) => (
          <Route
            key={product.id}
            exact
            path={[
              `/task03/${product.category.toLowerCase()}/${index + 1}`,
              `/task03/${product.category.toLowerCase()}`,
              `/task03`
            ]}
            render={() => (
              <Product
                {...product}
                link={`/task03/${product.category.toLowerCase()}/${index + 1}`}
              />
            )}
          />
        ))}
      </section>
    );
};

const CategoryPage = () => {
    const { category } = useParams();
    const filteredProducts = products.filter(
      (product) => product.category.toLowerCase() === category
    );
  
    if (filteredProducts.length === 0) {
        return <Redirect to="/404" />;
    }
  
    return <Shop products={filteredProducts} />;
};

const SimpleShop = ({ products }) => {
    return products.map((product) => (
        <Product key={product.id} {...product} />
    ));
};

export { Shop, CategoryPage, SimpleShop };