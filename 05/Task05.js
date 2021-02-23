import React, {useState} from 'react';
import { Route, useParams, useHistory, HashRouter as Router } from 'react-router-dom';
import Shop from '../src/components/Shop';
import products from './../src/products.json';

const sortingFuncs = {
    sortByPriceRange: sortByPriceRange,
    sortByPhrase: sortByPhrase,
    sortByAllParams: sortByAllParams
}

function sortByPriceRange(min, max) {
    const minPrice = parseInt(min);
        const maxPrice = parseInt(max);
        const sorted = products.filter(({price}) => price >= minPrice && price <= maxPrice)
        return sorted
}
function sortByPhrase(phrase) {
    const word = phrase.toLowerCase();
    const sorted = products.filter(({name}) => name.toLowerCase().includes(word))
    return sorted
}
function sortByAllParams(min, max, phrase) {
    const sortedByPrice = sortByPriceRange(min, max);
    const sortedByAllParams = sortedByPrice.filter(({name}) => name.toLowerCase().includes(phrase.toLowerCase()))
    return sortedByAllParams
}

function pickSortFunc() {
    const {min, max, phrase} = useParams();
    if(min && max && !phrase) {
        return {
            func: 'sortByPriceRange',
            params: [min, max]
        }
    } else if(!(min && max) && phrase) {
        return {
            func: 'sortByPhrase',
            params: [phrase]
        }
    } else if(min && max && phrase) {
        return {
            func: 'sortByAllParams',
            params: [min, max, phrase]
        }
    } 
}

const ShopSorted = () => {
    const {func, params} = pickSortFunc();
    return <Shop products={sortingFuncs[func](...params)}/>
}

const initState = { 
    minPrice: '',
    maxPrice: '',
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
        if(minPrice > maxPrice) {
            alert('Najpierw wpisz cenę minimalną, potem maksymalną.')
        } else if (minPrice && maxPrice && !phrase) {
            history.push(`/task05/price-${minPrice}-${maxPrice}`)
        } else if(!(minPrice && maxPrice) && phrase) {
            history.push(`/task05/${phrase}`)
        }  else if(minPrice && maxPrice && phrase) {
            history.push(`/task05/${phrase}-price-${minPrice}-${maxPrice}`)
        } else if(!minPrice && !maxPrice && !phrase) {
            alert('Proszę wprowadzić parametry filtrowania.')
        }
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
        <Route path={`/task05/price-:min-:max`}><ShopSorted/></Route>
        <Route path={`/task05/:phrase`}><ShopSorted/></Route>
        <Route path={`/task05/:phrase-price-:min-:max`}><ShopSorted/></Route>
    </>
    );

}

export default Task05;

