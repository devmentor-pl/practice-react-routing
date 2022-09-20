import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Product from './Product';

const Shop = ({ products }) => {
    console.log( products )
    return (
        <section>
            {
                products.map(p =>
                    <Product
                        {...p}
                        link={'/task03/category/' + p.category}
                    />)
            }
            {
                products.map(p =>
                    <Switch>
                        <Route path={'/task03/category/' + p.category}>
                            {/* <h3>Wybrano kategorie {p.category}</h3> */}
                            <Product
                                {...p}
                            />
                        </Route>
                        <Route exact path={'/task03'}>
                            <Product
                                {...p}
                            />
                        </Route>
                        <Route exact path={'/task05/:search'}>
                            <Product
                                {...p}
                            />
                        </Route>
                    </Switch>

                )
            }
        </section>
    );
}

export default Shop;