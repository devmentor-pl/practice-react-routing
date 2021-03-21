import React, {useState} from 'react';
import { Route, useHistory } from 'react-router-dom';
import Shop from '../src/components/Shop';
import products from './../src/products.json';

function sortByPriceRange(min=0, max=0) {
    const minPrice = parseInt(min);
    const maxPrice = parseInt(max);
    const sorted = products.filter(({price}) => {
        if(min && max) {
            return price >= minPrice && price <= maxPrice
        } else if(min && !max) {
            return price >= minPrice
        } else if(!min && max) {
            return price <= maxPrice
        } else {return true}
    })
    return sorted
}
function sortByPhrase(products, phrase) {
    console.log(phrase)
    const word = phrase.toLowerCase();
    const sorted = products.filter(({name}) => name.toLowerCase().includes(word))
    console.log(sorted)
    console.log(products)
    return phrase ? sorted : products
}

const ShopSorted = ({match}) => {
    const {minPrice, maxPrice, phrase} = match.params;
    const priceSorted = sortByPriceRange(minPrice, maxPrice);
    const sorted = sortByPhrase(priceSorted, phrase)
    console.log(sorted)
    return <Shop products={sorted}/>
}

const initState = { 
    minPrice: 0,
    maxPrice: 0,
    phrase: ''
}

const Task05 = () => {
    const [values, setValue] = useState(initState);
    const history = useHistory();

    function handleChange({target}) {
        setValue({...values, [target.name]: target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        const {minPrice, maxPrice, phrase} = values;
        history.push(`/task05/${minPrice},${maxPrice}-${phrase}`)
    }

    return (
    <>
        <h1>Task05</h1>
        <form onSubmit={e => handleSubmit(e)}>
            Search by:
            <div> <p>Price:</p>
                <label htmlFor="minPrice">from: <input min='0' onChange={e => handleChange(e)} name='minPrice' type='number' value={values.minPrice} /></label>
                <label htmlFor="maxPrice">to: <input min='0' onChange={e => handleChange(e)} name='maxPrice' type='number' value={values.maxPrice} /></label>
            </div>
            <div> <p>Phrase:</p>
                <label htmlFor="phrase"><input onChange={e => handleChange(e)} name='phrase' type='text' value={values.phrase}/></label>
            </div>
            <button>Search</button>
        </form>
        <Route exact path='/task05'><Shop products={products}/></Route>
        <Route path={`/task05/:minPrice,:maxPrice-:phrase`} component={ShopSorted} />
    </>
    );

}

export default Task05;

