import React, { useState } from "react";
import { useHistory, Route, useParams } from "react-router-dom";
import Shop from "../src/components/Shop";
import products from "../src/products.json";

const Task05 = () => {
  const history = useHistory();

  const [searchValues, setSearchValues] = useState({
    min: "",
    max: "",
    searchTerm: "",
  });

  const { min, max, searchTerm } = searchValues;

  const submitHandler = (e) => {
    e.preventDefault();

    history.push(`/task05/${min},${max}-${searchTerm}`);

    setSearchValues({ min: "", max: "", searchTerm: "" });
  };

  const SearchedProductsList = () => {
    const { min, max, searchTerm = "" } = useParams();

    const searchedProducts = products.filter(
      (item) =>
        item.name.toLowerCase().includes(`${searchTerm}`) &&
        item.price >= parseInt(min) &&
        item.price <= parseInt(max)
    );

    if (searchedProducts.length === 0) {
      return <p>Brak produktów o podanych kryteriach</p>;
    }

    return <Shop products={searchedProducts} />;
  };

  const labelStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "350px",
    marginBottom: "10px",
  };

  return (
    <>
      <h1>Task05</h1>

      <form onSubmit={submitHandler}>
        <label style={labelStyle}>
          Wpisz szukaną frazę
          <input //
            name="searchTerm"
            value={searchTerm}
            onChange={(e) =>
              setSearchValues({
                ...searchValues,
                searchTerm: e.target.value.toLowerCase(),
              })
            }
          />
        </label>

        <label style={labelStyle}>
          Cena minimalna
          <input //
            name="min"
            value={min}
            type="number"
            onChange={(e) =>
              setSearchValues({
                ...searchValues,
                min: e.target.value.toLowerCase(),
              })
            }
          />
        </label>

        <label style={labelStyle}>
          Cena maksymalna
          <input //
            name="max"
            value={max}
            type="number"
            onChange={(e) =>
              setSearchValues({
                ...searchValues,
                max: e.target.value.toLowerCase(),
              })
            }
          />
        </label>

        <input type="submit" value="Szukaj" />
      </form>
      <Route exact path="/task05">
        <Shop products={products} />
      </Route>
      <Route path="/task05/:min?,:max?-:searchTerm?">
        <SearchedProductsList />
      </Route>
    </>
  );
};

export default Task05;
