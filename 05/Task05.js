import React from "react";
import { Route, useHistory, useParams } from "react-router";
import useInputState from "../src/hooks/useInputState";
import products from "../src/products.json";
import Shop from "../src/components/Shop";

const Task05 = () => {
    const [minPrice, changeMinPrice, resetMinPrice] = useInputState("");
    const [maxPrice, changeMaxPrice, resetMaxPrice] = useInputState("");
    const [keyWord, changekeyWord, resetKeyWord] = useInputState("");

    const history = useHistory();

    const getMinPrice = () => {
        let min = minPrice;
        if (min === "") {
            min = 0;
            return min;
        } else {
            return min;
        }
    };

    const getMaxPrice = () => {
        let max = maxPrice;
        if (max === "") {
            max = 999;
            return max;
        } else {
            return max;
        }
    };

    const ShowProducts = () => {
        const { minPrice, maxPrice, keyWord = "" } = useParams();
        const filtered = products.filter(
            (item) =>
                item.price > minPrice &&
                item.price < maxPrice &&
                item.name.toLowerCase().includes(keyWord.toLowerCase())
        );
        return <Shop products={filtered} />;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/task05/${getMinPrice()}-${getMaxPrice()}-${keyWord}`);
        resetMinPrice();
        resetMaxPrice();
        resetKeyWord();
    };

    return (
        <>
            <h1>Task05</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Min price:
                    <input
                        type="number"
                        min="1"
                        max="999"
                        value={minPrice}
                        onChange={changeMinPrice}
                    ></input>
                </label>
                <label>
                    Max price:
                    <input
                        type="number"
                        min="1"
                        max="999"
                        value={maxPrice}
                        onChange={changeMaxPrice}
                    ></input>
                </label>
                <label>
                    Search by word:
                    <input
                        type="text"
                        value={keyWord}
                        onChange={changekeyWord}
                    ></input>
                </label>
                <button type="submit">Search</button>
            </form>
            <Route
                path="/task05/:minPrice-:maxPrice-:keyWord?"
                component={ShowProducts}
            />
        </>
    );
};

export default Task05;
