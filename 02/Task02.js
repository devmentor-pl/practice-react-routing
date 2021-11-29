import React from "react";
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
    useParams,
} from "react-router-dom";
import Product from "../src/components/Product";
import products from "../src/products.json";

const Task02 = () => {
    const links = products.map((link) => (
        <li key={link.id}>
            <Link to={`/task02/product-${link.id}`}>{link.name}</Link>
        </li>
    ));

    const ProductRoute = () => {
        const { id } = useParams();
        const [product = null] = products.filter(
            (item) => item.id == parseInt(id)
        );

        if (product === null) {
            return <Redirect to="/404.html" />;
        }

        return <Product {...product} />;
    };

    return (
        <>
            <h1>Task02</h1>
            {links}
            <Switch>
                <Route
                    path="/task02/product-:id"
                    component={ProductRoute}
                ></Route>
            </Switch>
        </>
    );
};

export default Task02;
