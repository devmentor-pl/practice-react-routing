import React from "react";
import { Route, NavLink } from "react-router-dom";
import products from "./../src/products.json";
import {Shop, CategoryPage} from "../src/components/Shop";

const Task03 = () => {
    return (
        <>
        <h1>Task03</h1>
        <ul>
            <li>
            <NavLink
                activeStyle={{ borderRight: "5px solid green" }}
                to={"/task03/javascript"}
            >
                javascript
            </NavLink>
            </li>
            <li>
            <NavLink
                activeStyle={{ borderRight: "5px solid green" }}
                to={"/task03/react"}
            >
                react
            </NavLink>
            </li>
        </ul>

        <Route exact path="/task03">
            <Shop products={products} />
        </Route>

        <Route path="/task03/:category">
            <CategoryPage/>
        </Route>
        </>
    );
};

export default Task03;