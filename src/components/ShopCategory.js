import React from "react";
import { useParams, Redirect } from "react-router-dom";
import Shop from "./Shop";

function ShopCategory({ products }) {
  const { category } = useParams();
  const filteredByCategory = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return filteredByCategory.length > 0 ? (
    <Shop products={filteredByCategory} />
  ) : (
    <Redirect to="/task03/404.html" />
  );
}

export default ShopCategory;
