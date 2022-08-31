import React from 'react';
import { Route } from 'react-router-dom';
import Product from './Product';

const Shop = ({ products }) => {
    return (
        <section>
            {
                products.map(p =>
                    <Product
                        {...p}
                        link={'/task03/category/' + p.category}
                    />)
            }
            <Route path='/task03/category/JavaScript'>
                <h3>Wybrano JavaScript</h3>
            </Route>
            <Route path='/task03/category/React'>
                <h3>Wybrano React</h3>
            </Route>

            {
                products.map(p =>
                    <Route path={'/task03/category/' + p.category}>
                        <h3>Wybrano kategorie {p.category}</h3>
                        <Product
                            {...p}
                        />
                    </Route>
                )
            }



        </section>
    );
}

export default Shop;