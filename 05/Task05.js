import React from 'react';
import Form from '../src/components/Form';
import { Route } from 'react-router-dom';
import SearchedProducts from '../src/components/SearchedProducts';
// import NotFound from '../src/components/NotFound';

const Task05 = () => {
    return (
        <>
            <h1>Task05</h1>
            <Form />
            <Route path='/task05/:minPrice?,:maxPrice?-:searchTerm?'>
                <SearchedProducts />
            </Route>
            {/* <Route path='/404.html'>
                <NotFound />
            </Route> */}
        </>       
    );
}

export default Task05;

