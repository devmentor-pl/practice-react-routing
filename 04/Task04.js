import React from "react";
import { Route, useHistory } from "react-router-dom";
import products from "../src/products.json";
import Shop from "../src/components/Shop";

const Task04 = () => {
    const PriceAsc = () => {
        const productsAsc = products.sort((a, b) =>
            a.price > b.price ? 1 : -1
        );
        return <Shop products={productsAsc} />;
    };

    const PriceDesc = () => {
        const productsDesc = products.sort((a, b) =>
            b.price > a.price ? 1 : -1
        );
        return <Shop products={productsDesc} />;
    };

    const history = useHistory();

    const handleChange = (sort) => {
        history.push(`/task04/price-${sort}`);
    };

    return (
        <>
            <h1>Task04</h1>
            <label htmlFor="pet-select">Price:</label>

            <select
                name="pets"
                id="pet-select"
                onChange={(e) => handleChange(e.target.value)}
            >
                <option value="">--Please choose an option--</option>
                <option value="asc">Lower first</option>
                <option value="desc">Higher first</option>
            </select>
            <Route exact path="/task04/price-asc" component={PriceAsc} />
            <Route exact path="/task04/price-desc" component={PriceDesc} />
        </>
    );
};

export default Task04;
