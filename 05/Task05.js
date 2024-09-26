import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import FilteredData from '../src/components/FilteredData';

const Task05 = () => {
    const [minPrice, setMinPrice] = React.useState(0)
    const [maxPrice, setMaxPrice] = React.useState(100)
    const [searchTerm, setSearchTerm] = React.useState('')
    const history = useHistory()

    const handleChange = (e) => {
        switch(e.target.name){
            case 'minPrice': setMinPrice(e.target.value)
                break;
            case 'maxPrice': setMaxPrice(e.target.value)
                break;
            case 'searchTerm': setSearchTerm(e.target.value)
                break;
            default:
                break;
        }
    }

    const handleSearch = () => {
        let searchTermParam = searchTerm
        if (searchTerm === '') {
            searchTermParam = '_'
        }
        history.push(`/task05/${minPrice},${maxPrice}-${searchTermParam}`)
    }

    return (
        <>
        <h1>Task05</h1>
        <label htmlFor="minPrice">minPrice</label>
        <input id={'minPrice'} type="number" name='minPrice' value={minPrice} onChange={handleChange}/>
        <label htmlFor="maxPrice">maxPrice</label>
        <input id={'maxPrice'} type="number" name='maxPrice' value={maxPrice} onChange={handleChange}/>
        <label htmlFor="searchTerm">searchTerm</label>
        <input id={'searchTerm'} type="text" name='searchTerm' value={searchTerm} onChange={handleChange}/>
        <button
            onClick={handleSearch}
        >
            SEARCH
        </button>
        <Switch>
            <Route path={'/task05/:minPrice,:maxPrice-:searchTerm'}>
                <FilteredData />
            </Route>
        </Switch>
        </>
    );
}

export default Task05;

