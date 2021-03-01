import React from "react";
import products from '../src/products.json'
import { useHistory } from 'react-router-dom';
import Product from '../src/components/Product'
import Shop from '../src/components/Shop'
import {Route } from "react-router-dom";

const Task04 = () => {
    const history = useHistory();


    const options = [
           { path: "/task04/", text: "--choose--"},
           { path: "price-desc", text: "descending price"},
           { path: "price-asc", text: "ascending prices"},
    ];


      const handleChange = event => {
      history.push( event.target.value );
      }

      const renderSortedProducts = () => {
    
       return options.map(({path}) => {

        if(path === "/task04/") {
            return <Shop products={products}/>
       
        }else if(path === "price-desc") {
            sortingDescening()
        }else if(path === "price-asc") {            
            sortingAscending()
        }
       })
      }

      const sortingDescening = () => {
          const sortedASC = products.sort(function(a,b) {
            a.price - b.price

      })
     console.log(sortedASC.reverse())
     console.log(sortedASC)
      return sortedASC;
      
      }
      const sortingAscending = () => {
        const sortedASC = products.sort(function(a,b) {
            b.price - a.price
      })
      
     console.log(sortedASC)
     console.log(sortedASC)
      return sortedASC;
      
      }
 





    return (
        <React.Fragment>
        <h1>Task04</h1>
            <span>sort products by:</span>
            <select
             onChange={handleChange}
            >
            {options.map(({path, text}) => (
                <option key={path} value={`/task04/${path}`}>
                {text}
                </option>
            ))}
            </select>

          {renderSortedProducts()}
   
        </React.Fragment>
    );

}

export default Task04;

