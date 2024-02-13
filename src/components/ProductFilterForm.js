import React, { useState } from 'react';

const ProductFilterForm = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    onFilterChange({ minPrice, maxPrice, searchTerm });
  };

  const clearFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setSearchTerm('');
    onFilterChange({ minPrice: '', maxPrice: '', searchTerm: '' });
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        placeholder="Min price"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        placeholder="Max Price"
      />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search terms"
      />
      <button type="submit">Search</button>
      <br />
      <button type="button" onClick={clearFilters}>
        ❌ Clear inputs
      </button>
    </form>
  );
};

export default ProductFilterForm;
