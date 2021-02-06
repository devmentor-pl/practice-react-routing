import React from "react";
import { Link, Route } from "react-router-dom";

import Shop from "../src/components/Shop";

import products from "./../src/products.json";

const Task03 = () => {
  const categories = [
    {
      text: "All",
      url: "/task03/",
    },
    {
      text: "JavaScript",
      url: "/task03/javascript",
    },
    {
      text: "React",
      url: "/task03/react",
    },
  ];

  const nav = categories.map(item => {
    return (
      <li key={item.url}>
        <Link to={item.url}>{item.text}</Link>
      </li>
    );
  });

  const routes = categories.map(category => {
    const filteredProducts = products.filter(item => {
      if (category.text === "All") {
        return item;
      }

      return item.category.toLowerCase() === category.text.toLowerCase();
    });

    return (
      <Route exact key={category.url} path={category.url}>
        <Shop products={filteredProducts} />
      </Route>
    );
  });

  return (
    <>
      <h1>Task03</h1>
      {nav}
      {routes}
    </>
  );
};

export default Task03;
