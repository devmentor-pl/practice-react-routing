import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import products from "../src/products.json";
import { SimpleShop } from "../src/components/Shop";

const Task04 = () => {
    const [sortOption, setSortOption] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (sortOption) {
        history.push(`/task04/${sortOption}`);
        }
    }, [sortOption, history]);

    const getSortedProducts = () => {
        switch (sortOption) {
        case "price-desc":
            return [...products].sort((a, b) => b.price - a.price);
        case "price-asc":
            return [...products].sort((a, b) => a.price - b.price);
        default:
            return products;
        }
    };

    return (
        <>
        <h1>Task04</h1>
        <select
            name="sortBy"
            id="sortBy"
            onChange={(e) => setSortOption(e.target.value)}
            defaultValue={"default"}
        >
            <option value="default" disabled hidden>
            Choose here
            </option>
            <option value="price-desc">Cena malejąco</option>
            <option value="price-asc">Cena rosnąco</option>
        </select>
        <SimpleShop products={getSortedProducts()} />
        </>
    );
};

export default Task04;
