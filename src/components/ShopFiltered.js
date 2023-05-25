import React from "react";
import { useParams } from "react-router-dom";

import Shop from "./Shop";

function ShopFiltered({ products }) {
  const { minPrice, maxPrice, searchTerm } = useParams();

  const filteredProducts = products.filter((product) => {
    if (minPrice && product.price < minPrice) return false;
    if (maxPrice && product.price > maxPrice) return false;
    if (
      searchTerm &&
      !product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;

    return true;
  });

  return <Shop products={filteredProducts} />;
}

export default ShopFiltered;
