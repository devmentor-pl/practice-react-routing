import React from 'react';
import Product from './Product';
import products from "./../products.json";
import { useParams } from "react-router-dom";

const Shop = (props) => {
  const {
    category = "",
    sorting = "price-asc",
    min = 0,
    max = 100000,
    term = "",
  } = useParams();
  let { main } = props;

  let prodCat = [];
  if (main) {
    prodCat = products;
  } else {
    prodCat = products.filter((prod) => prod.category.includes(category));
  }

  prodCat = prodCat.filter(
    (prod) =>
      prod.price >= min && prod.price <= max && prod.description.includes(term)
  );

  switch (sorting) {
    case "price-desc":
      function sortNum(a, b) {
        return b.price - a.price;
      }
      prodCat.sort(sortNum);
      break;
    case "price-asc":
      function sortNumber(a, b) {
        return a.price - b.price;
      }
      prodCat.sort(sortNumber);
      break;
    case "name-alph":
      function sortDescription(a, b) {
        return a.description.localeCompare(b.description);
      }
      prodCat.sort(sortDescription);
      break;
  }

  return (
    <section>
      {prodCat.map((p) => (
        <Product {...p} />
      ))}
    </section>
  );
};

export default Shop;
