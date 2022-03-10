import React, {useState} from 'react';
import products from './../src/products.json';
import {Route, Redirect, useHistory, useParams} from 'react-router-dom';
import Shop from '../src/components/Shop';


const Task05 = () => {

    const init = {
        minPrice:0,
        maxPrice:1000,
        searchTerm:''
    }

    const [data, setData] = useState(init);
    const {minPrice, maxPrice, searchTerm} = data;
    const history = useHistory();

    const handleChange = e => {
       e.preventDefault();
       const {name, value} = e.target;
       setData({...data, [name]: value.toLowerCase()});  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/task05/${minPrice},${maxPrice}-${searchTerm}`);
        setData(init);
    }
  
    const ProductsList = () => {
        const {minPrice, maxPrice, searchTerm} = useParams();
        const copyProductsList = products.filter(item=>item.name.toLowerCase().includes(`${searchTerm}`) && item.price >=minPrice && item.price<=maxPrice)
       
        return <Shop products={copyProductsList}/>
    }

    return (
        <>
            <h1>Task05</h1>
            <form onSubmit={handleSubmit}>
                <input name="searchTerm" value={searchTerm} placeholder="szukany produkt" onChange={handleChange}/>
                <label>Przedział cenowy</label>
                <input type="number" name="minPrice" value={minPrice} onChange={handleChange}/>
                <input type="number" name="maxPrice" value={maxPrice} onChange={handleChange}/>
                <input type="submit"/>
            </form>
            <Route path='/task05/:minPrice,:maxPrice-:searchTerm'> <ProductsList/></Route>
        </>
    );
}

export default Task05;

