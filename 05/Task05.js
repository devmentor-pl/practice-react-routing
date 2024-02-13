import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import products from '../src/products.json';
import ProductFilterForm from '../src/components/ProductFilterForm';
import Shop from '../src/components/Shop';
import { isMatch } from '../src/utilis/searchUtilis';

const Task05 = () => {
  const history = useHistory();
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const params = new URLSearchParams(location.hash.split('?')[1]);
    const paramsObject = Object.fromEntries(params);

    const { minPrice, maxPrice, searchTerm } = paramsObject;

    const result = products.filter(
      (product) =>
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        isMatch(product, searchTerm)
    );

    setFilteredProducts(result);
  }, [location.hash]);

  const handleFilterChange = (filters) => {
    const query = `#${
      filters.searchTerm ? `/search/${filters.searchTerm}` : ''
    }?minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}&searchTerm=${
      filters.searchTerm
    }`;
    history.push(query);
  };

  return (
    <div>
      <h1>Task05</h1>
      <ProductFilterForm onFilterChange={handleFilterChange} />
      <Shop products={filteredProducts} />
    </div>
  );
};

export default Task05;
