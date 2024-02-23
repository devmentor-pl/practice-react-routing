import React from "react";
import { useHistory, Route, useParams } from "react-router-dom";
import products from "../src/products.json";
import { SimpleShop } from "../src/components/Shop";

const FilterForm = ({ onFilter }) => {
    const history = useHistory();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const min = formData.get("min");
      const max = formData.get("max");
      const searchTerm = formData.get("searchTerm");
      history.push(`/task05/${min},${max}-${searchTerm}`);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input name="min" placeholder="Min price" type="number" />
        <input name="max" placeholder="Max price" type="number" />
        <input name="searchTerm" placeholder="Search term" type="text" />
        <button type="submit">Filter</button>
      </form>
    );
};

const Task05 = () => {
    return (
      <>
        <h1>Task05</h1>
        <FilterForm />
        <Route exact path="/task05">
          <SimpleShop products={products} />
        </Route>
        <Route path="/task05/:filterParams" component={FilteredProductsPage} />
      </>
    );
};

const FilteredProductsPage = () => {
    const { filterParams } = useParams();
    const [min, max, searchTerm] = filterParams.split(/,|-/);
    const filteredProducts = products.filter((product) => {
      const inPriceRange = (!min || product.price >= parseFloat(min)) && (!max || product.price <= parseFloat(max));
      const matchesSearchTerm = !searchTerm || product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return inPriceRange && matchesSearchTerm;
    });
  
    return <SimpleShop products={filteredProducts} />;
};

export default Task05;
