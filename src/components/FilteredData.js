import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import products from './../products.json';

import Shop from './Shop';

const FilteredData = () => {
  const {minPrice, maxPrice, searchTerm = ''} = useParams()

  const filteredProducts = 
    products
      .filter(product => product.price >= Number(minPrice))
      .filter(product => product.price <= Number(maxPrice))
      .filter(product => searchTerm === '_' || product.name.includes(searchTerm) || product.description.includes(searchTerm))

    return (
        <section>
          <Shop products={filteredProducts} />
        </section>
    );
}

export default FilteredData;