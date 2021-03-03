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
      return sortingFun(searchTerm, minPrice, maxPrice)
   
    };

      const sortingFun = (searchTerm, minPrice,maxPrice) => {
        const searchedWord = searchTerm.toLowerCase();
        const sortedProduct = products.filter(({name}) => name.toLowerCase().includes(searchedWord)) && products.filter(({price}) => price >= minPrice && price <= maxPrice)


        // if(sortedProduct.length === 0) {
        //     alert('no results found :(')
        //   } else {    <== JAK POWINNM TU NAPISAC WARUNEK ? CO ROBIĘ NIE TAK?
        //       return <Shop products={sortedProduct} />
        //   }
          return <Shop products={sortedProduct} />;
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
        const {minPice, maxPice, searchTerm} = values;
        e.preventDefault()
        if(!minPice && !maxPice && !searchTerm) {
          alert('fill in all the data!')
        } else {
          history.push(`${home}/${values.minPrice}/${values.maxPrice}/${values.searchTerm}`);
          console.log(history.location)
          setValues({
            minPrice: '',
            maxPrice: '',
            searchTerm: '',
          })
        }

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
        </>
    );
}

export default Task05;

