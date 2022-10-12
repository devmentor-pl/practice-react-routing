import React from "react";
import { Redirect, useParams, Route } from "react-router-dom";
import { Product } from "./Product";
import products from "../products.json";

const Shop = ({ products }) => {
  return (
    <section>
      {products.map((product, index) => (
        <React.Fragment key={product.id}>
          <Route exact path={`/task03`}>
            <Product
              {...product}
              link={`/task03/${product.category.toLowerCase()}/${index + 1}`}
            />
          </Route>
          <Route exact path={`/task03/${product.category.toLowerCase()}`}>
            <Product
              {...product}
              link={`/task03/${product.category.toLowerCase()}/${index + 1}`}
            />
          </Route>
          <Route
            path={`/task03/${product.category.toLowerCase()}/${index + 1}`}
          >
            <Product {...product} />
          </Route>
        </React.Fragment>
      ))}
    </section>
  );
};

const CategoryPage = () => {
  const { category } = useParams();
  const productsInCategory = products.filter(
    (product) => category === product.category.toLowerCase()
  );

  if (productsInCategory.length === 0) return <Redirect to={"/404"} />;

  return <Shop products={productsInCategory} />;
};

export { Shop, CategoryPage };
