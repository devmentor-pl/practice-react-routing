import React from 'react';
import Product from './Product';
import products from "./../products.json";
import { useParams } from "react-router-dom";

const Shop = (props) => {
  const { category, sorting } = useParams();
  console.log(sorting);
  const { main } = props;
  console.log(category, products);
  let prodCat = [];
  if (main) {
    prodCat = products;
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
  } else {
    prodCat = products.filter((prod) => prod.category.includes(category));
  }
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
