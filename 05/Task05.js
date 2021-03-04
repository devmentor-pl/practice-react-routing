import React, {useState} from 'react';
import products from '../src/products.json'
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Shop from '../src/components/Shop'



const Task05 = () => {
  const history = useHistory();
  const home = `/task05`;

      const sortedProducts = ({ match }) => {
        const { minPrice, maxPrice, searchTerm } = match.params;
        return sortingFun(minPrice, maxPrice, searchTerm)
    
      };

      const sortingFun = (minPrice = '0',  maxPrice = '100', searchTerm = '') => {
       const sortedAllProducts  = products.filter(({price, name}) => {
         let sortedProductByPrice = price >= minPrice && price <= maxPrice

          if(sortedProductByPrice && searchTerm.length !== 0 ) {

            const searchedWord = searchTerm.toLowerCase();
            const sortedProductByWord = name.toLowerCase().includes(searchedWord)
       
            if(sortedProductByWord) {
             return name;
            }

          }      
          
       })
       return <Shop products={sortedAllProducts} />;
      }
   

  
      const [values, setValues] = useState({
        minPrice: '',
        maxPrice: '',
        searchTerm: '',
      })

      const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
      }

      const handleSubmit = e => {
        const {minPrice, maxPrice, searchTerm} = values;
        e.preventDefault()
    
          history.push(`${home}/${minPrice}/${maxPrice}/${searchTerm}`);
          setValues({
            minPrice: '',
            maxPrice: '',
            searchTerm: '',
          })
        

      }
  
  

    return (
      <>
      <h1>Task05</h1>
      <form onSubmit={handleSubmit}> 
        <p>Enter what you are looking for:</p>
        <input
        type="text"
        placeholder="Search"
        id="searchTerm"
        name="searchTerm"
        value={values.searchTerm}
        onChange={handleChange}
      />
      <p>Enter the price range:</p>
      <input placeholder="min"
          type="number"
          placeholder="min"
          id="minPrice"
          name="minPrice"
          value={values.minPrice}
          onChange={handleChange}
        />
      <input placeholder="max"
          type="number"
          placeholder="max"
          id="maxPrice"
          name="maxPrice"
          value={values.maxPrice}
          onChange={handleChange}
        />
          <button type="submit">search!</button>
      </form>

      <Route exact path={home}>
        <Shop products={products} />
      </Route>

      <Route path={`${home}/:minPrice/:maxPrice/:searchTerm`} component={sortedProducts} />
      <Route path={`${home}/:minPrice/:maxPrice`} component={sortedProducts} />
      <Route path={`${home}/:searchTerm`} component={sortedProducts} />

      </>
  );
  
}

export default Task05;