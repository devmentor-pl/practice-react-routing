import React from 'react';
import Product from '../src/components/Product';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import products from '../src/products.json';


const Task02 = () => {
    const { path } = useRouteMatch();
    const productList = products.map(product => (
                <li key={product.id}>
                    <Link to={`${path}/product-${product.id}`}>
                        {product.name}
                    </Link>
                </li>
            )
    );

    return (
        <>
            <h1>Task02</h1>
            <ul>{productList}</ul>
            <Switch>
                <Route  
                    path="/task02/product-:id"
                    render={(props) => {
                        const { id } = props.match.params;
                        const [productProps = {}] = products.filter(p => p.id === Number(id));
                        return <Product {...productProps} />
                }}/>
            </Switch>
        </>
    );
}

export default Task02;


// {
//     products.map((product) => {
//         console.log('🚀 ~ {products.map ~ product', product);
//         return (
//             <Route exact path={`/task02/product-:id`} key={product.id}>
//                 <Product {...product} />
//             </Route>
//         );
//     });
// }

