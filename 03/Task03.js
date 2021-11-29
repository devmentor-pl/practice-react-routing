import React from "react";
import { Link, Route, useParams, Redirect } from "react-router-dom";
import products from "./../src/products.json";
import Shop from "../src/components/Shop";
import Product from "../src/components/Product";

const Task03 = () => {
    const categories = [
        { text: "JavaScript", url: "/task03/javascript" },
        { text: "React", url: "/task03/react" },
    ];

    const links = categories.map((link) => (
        <li key={link.url}>
            <Link to={link.url}>{link.text}</Link>
        </li>
    ));

    const CategoryRoute = (categoryName) => {
        const category = products.filter(
            (item) => item.category == categoryName
        );

        if (category === null) {
            return <Redirect to="/404.html" />;
        }

        return <Shop products={category} />;
    };

    return (
        <>
            <h1>Task03</h1>
            <Route exact path="/task03/">
                <Shop products={products} />
            </Route>
            <h2>Choose category</h2>
            {links}
            <Route exact path="/task03/javascript">
                <h3>Javascript</h3>
                {CategoryRoute("JavaScript")}
            </Route>
            <Route path="/task03/react">
                <h3>React</h3>
                {CategoryRoute("React")}
            </Route>
        </>
    );
};

export default Task03;
