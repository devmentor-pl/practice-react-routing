import React from "react";
import { useParams } from "react-router-dom";
import products from "./../products.json";
import Shop from "./Shop";

const CategoryPage = () => {
  const { category } = useParams();

  const list = products.filter(
    (p) => category.toUpperCase() === p.category.toUpperCase()
  );

  if (list.length === 0) {
    return <p>Brak podanej kategorii</p>;
  }

  return <Shop list={list} />;
};

export default CategoryPage;
