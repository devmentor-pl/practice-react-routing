
import React from "react";
import products from '../src/products.json'
import { useHistory } from 'react-router-dom';
import Shop from '../src/components/Shop'
import { Route } from 'react-router-dom';

const Task04 = () => {
    const history = useHistory();

 
    const options = [
           { path: "/", text: "--choose--"},
           { path: "/price-desc", text: "descending price"},
           { path: "/price-asc", text: "ascending prices"},
    ];


      const handleChange = event => {
      history.push( event.target.value );
      }


      const renderSortedProducts = () => {
    
        return options.map(({path}) => {
        if(path == "/") {

           return  <Shop products={products} />
             
       
        } else if(path == "/price-desc") {
            <Shop products={sortByPriceAsc} />
        } else if(path == "/price-asc") {            
            <Shop products={sortByPriceDesc} />
        }

       })
      }

       const sortByPriceAsc = products.sort((a,b) => a.price - b.price )
       console.log(sortByPriceAsc)
       const sortByPriceDesc = products.sort((a,b) => b.price - a.price )
       console.log(sortByPriceDesc)
 


    return (
        <React.Fragment>
        <h1>Task04</h1>
            <span>sort products by:</span>
            <select
             onChange={handleChange}
            >
            {options.map(({path, text}) => (
                <option key={path} value={`/task04${path}`}>
                {text}
                </option>
            ))}
            </select>
            {/* <Route exact path='/'>
                <Shop products={products} />
            </Route> */}

          {renderSortedProducts()}
   
        </React.Fragment>
    );

}

export default Task04;

