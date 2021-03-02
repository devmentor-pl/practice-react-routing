
import React from "react";
import products from '../src/products.json'
import { useHistory } from 'react-router-dom';
import Shop from '../src/components/Shop'
import { Route } from 'react-router-dom';

const Task04 = () => {
    const history = useHistory();
    const home = `/task04`;

    const options = [
           { path: home, text: "--choose--"},
           { path: 'sortedDescending', text: "descending prices"},
           { path: 'sortedAscending', text: "ascending prices"},
    ];

      const handleChange = event => {
          history.push(event.target.value );
      }

      const sortedProducts = ({ match }) => {
        const { sortParam } = match.params;

        return <Shop products={sortingFunction[sortParam]()} />;
      };

   

    const sortingFunction = {
        sortedAscending:  () => {
            return [...products].sort((a, b) => a.price - b.price)
        },
        sortedDescending: () => {
            return [...products].sort((a, b) => b.price - a.price
        )},
    }

    return (
        <React.Fragment>
        <h1>Task04</h1>
            <span>sort products by:</span>
            <select onChange={handleChange} >
            {options.map(({path, text}) => (<option key={path} value={path}> {text}  </option> ))}
            </select>

            <Route exact path={home}>
              <Shop products={products} />
            </Route>

            <Route path={`${home}/:sortParam`} component={sortedProducts} />
    
        </React.Fragment>
    );
}

export default Task04;

