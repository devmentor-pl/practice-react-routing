import React from 'react';
import products from './../src/products.json';
// import Product from './../src/components/Product'
import { Route, useParams } from 'react-router-dom';
import Shop from './../src/components/Shop'

// const Shop = ({ list }) => {
//     console.log(list)
//     return (
//         <div>
//             {
//                 list.map(p => <Product {...p} />)
//             }
//             <hr />
//         </div>
//     )
// }

const CategoryPage = () => {
    const { category } = useParams()
    const filteredList = products.filter(item =>
        item.category.toUpperCase() === category.toUpperCase()
    )
    console.log(filteredList)
    if(filteredList.length === 0) {
        return <div>Brak takiej kategorii</div>
    }
    return <Shop list={filteredList} />
}

const Task03 = () => {
    return (
        <div>
            <h1>Task03</h1>
            <div>show category - URL - /task03/javascript or react</div>
            <Route exact path='/task03'>
                <Shop list={products} />
            </Route>
            <Route path='/task03/:category'>
                <CategoryPage />
            </Route>
        </div>
    );
}

export default Task03;

