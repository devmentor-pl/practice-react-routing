import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import products from './../products.json';
import Shop from './Shop';
import * as h from '../helpers';

function FilteredPage() {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const location = useLocation();
    const { query } = useParams();

    const getSearchParams = searchString => {
        return new URLSearchParams(searchString);
    };

    const filterData = (dataArr, query, minPrice, maxPrice) => {
        const { minValue, maxValue } = h.findMinMaxPrice(dataArr);
        const queryLowerCased = query.toLowerCase();
        const minPriceNumb = Number(minPrice) || minValue;
        const maxPriceNumber = Number(maxPrice) || maxValue;
        const resultQuery =
            query === 'all'
                ? dataArr
                : dataArr.filter(function (item) {
                      const { name, description } = item;
                      return name
                          .toLowerCase()
                          .includes(queryLowerCased || description.toLowerCase().includes(queryLowerCased));
                  });

        const priceFiltered = resultQuery.filter(item => item.price >= minPriceNumb && item.price <= maxPriceNumber);
        return priceFiltered;
    };

    useEffect(() => {
        const searchParams = getSearchParams(location.search);
        const min = searchParams.get('range.price.min');
        const max = searchParams.get('range.price.max');

        setFilteredProducts(filterData(products, query, min, max));
    }, [location]);

    return (
        <div>
            <h2>Filtered products</h2>
            <Shop products={filteredProducts} />
        </div>
    );
}

export default FilteredPage;
