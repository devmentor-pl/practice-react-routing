import React, {useState} from 'react';
import { useHistory, Route, useParams } from 'react-router-dom';
import Shop from '../src/components/Shop';
import products from '../src/products.json'


const Task05 = () => {

    const history = useHistory()

    const values = {minPrice:'', maxPrice:'', searchTerm:'' }
  

    const [searchValues, setSearchValues] = useState(values)  
    const {minPrice, maxPrice, searchTerm} = searchValues

    const handleChange = e => {

       const {name, value} = e.target

       setSearchValues({...searchValues, [name]:value.toLowerCase()})
    }

    const handleSubmit = e => {
        e.preventDefault() 

        history.push(`/task05/${minPrice},${maxPrice}-${searchTerm}`)
       
        setSearchValues(values)
    }

    const ProductsList = () => {
        const {minPrice, maxPrice, searchTerm=''} = useParams()
        const searchedProducts = products.filter(item => item.name.toLowerCase().includes(`${searchTerm}`) && item.price >= parseInt(minPrice) && item.price<=parseInt(maxPrice))
     
        return <Shop products={searchedProducts}/>
    }


    return (
        <>
            <h1>Task05</h1>
            <form onSubmit={handleSubmit}>
                <label> Wpisz słowo klucz<input name='searchTerm' value={searchTerm} onChange={handleChange}></input></label>
                <div>
                    <label>Podaj przedział cenowy <input name='minPrice' value={minPrice} type='numer' placeholder='min' onChange={handleChange}/> <input name='maxPrice' value={maxPrice} type='numer' placeholder='max' onChange={handleChange}/></label>
                </div>
                <input type='submit' value='Szukaj'/>
            </form>
           <Route path='/task05/:minPrice?,:maxPrice?-:searchTerm?'>
               <ProductsList/>
            </Route>
        </>
    );
}

export default Task05;

