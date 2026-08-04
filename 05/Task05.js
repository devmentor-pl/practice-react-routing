import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory, useParams } from "react-router-dom";

import products from "../src/products.json";
import Shop from "../src/components/Shop";

const parseFiltersFromSlug = (slug = "") => {
  if (!slug) {
    return { minPrice: "", maxPrice: "", searchTerm: "" };
  }

  const parts = slug.split("-");
  const pricePart = parts[0] || "";
  const termPart = parts[1] || "";

  const priceParts = pricePart.split(",");
  const minPrice = priceParts[0] || "";
  const maxPrice = priceParts[1] || "";

  return {
    minPrice,
    maxPrice,
    searchTerm: decodeURIComponent(termPart),
  };
};

const buildSlugFromFilters = ({ minPrice, maxPrice, searchTerm }) => {
  const min = minPrice.trim();
  const max = maxPrice.trim();
  const term = searchTerm.trim();

  if (!min && !max && !term) {
    return "";
  }

  const pricePart = `${min},${max}`;
  return term ? `${pricePart}-${encodeURIComponent(term)}` : pricePart;
};

const ShopWithFilters = () => {
  const history = useHistory();
  const { filters } = useParams();
  const parsed = parseFiltersFromSlug(filters);

  const [minPrice, setMinPrice] = useState(parsed.minPrice);
  const [maxPrice, setMaxPrice] = useState(parsed.maxPrice);
  const [searchTerm, setSearchTerm] = useState(parsed.searchTerm);

  useEffect(() => {
    setMinPrice(parsed.minPrice);
    setMaxPrice(parsed.maxPrice);
    setSearchTerm(parsed.searchTerm);
  }, [parsed.minPrice, parsed.maxPrice, parsed.searchTerm]);

  const min = parsed.minPrice === "" ? -Infinity : Number(parsed.minPrice);
  const max = parsed.maxPrice === "" ? Infinity : Number(parsed.maxPrice);
  const phrase = parsed.searchTerm.toLowerCase();

  const filteredProducts = products.filter((product) => {
    const isInPriceRange = product.price >= min && product.price <= max;
    const searchableText =
      `${product.name} ${product.description}`.toLowerCase();
    const hasPhrase = phrase === "" || searchableText.includes(phrase);
    return isInPriceRange && hasPhrase;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const slug = buildSlugFromFilters({ minPrice, maxPrice, searchTerm });
    const nextPath = slug ? `/task05/${slug}` : "/task05";

    history.push(nextPath);
  };

  const handleReset = () => {
    setMinPrice("");
    setMaxPrice("");
    setSearchTerm("");
    history.push("/task05");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Cena od:
            <input
              type="number"
              min="0"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Cena do:
            <input
              type="number"
              min="0"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Szukana fraza:
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Filtruj</button>
        <button type="button" onClick={handleReset}>
          Wyczyść
        </button>
      </form>

      <p>Liczba wyników: {filteredProducts.length}</p>
      <Shop products={filteredProducts} />
    </section>
  );
};

const Task05 = () => {
  return (
    <Switch>
      <Route exact path="/task05/:filters?" component={ShopWithFilters} />
    </Switch>
  );
};

export default Task05;
