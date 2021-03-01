import React, {useState} from 'react';
import products from '../src/products.json'


const Task05 = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    const handleChange = e => {
        setSearchTerm(e.target.value);
      };

      React.useEffect(() => {
        const results = products.filter(product =>
          product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm]);


    return (
        <>
        <h1>Task05</h1>
        <form>
        <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
  
      />
        <ul>
            {searchResults.map(item => (
                <>
            <p>{item.name}</p>
            <p>{item.description}</p>
                </>
          
            ))}
        </ul>
        </form>
        </>
    );
}

export default Task05;

