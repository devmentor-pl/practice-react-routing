import React, { useState } from 'react';
import { useHistory, Route, useParams } from 'react-router-dom';
import Shop from '../src/components/Shop';
import products from '../src/products.json';
import Input from '../src/components/Input';

const SearchedProducts = () => {
    const { minPrice = '', maxPrice = '', searchTerm = '' } = useParams();

    const filteredProducts = products.filter(
        (product) =>
            (!minPrice || product.price >= parseFloat(minPrice)) &&
            (!maxPrice || product.price <= parseFloat(maxPrice)) &&
            (!searchTerm ||
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    if (filteredProducts.length === 0) {
        return <h3>searched product not found</h3>;
    }

    return <Shop products={filteredProducts} />;
};

const Task05 = () => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const history = useHistory();
    const handleReset = () => {
        setMinPrice('');
        setMaxPrice('');
        setSearchTerm('');
        history.push(`/task05`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPath = `/task05/${minPrice},${maxPrice}-${searchTerm}`;
        history.push(newPath);
    };

    return (
        <div>
            <h1>Task05</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="Min Price"
                />
                <Input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Max Price"
                />
                <Input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search Term"
                />
                <button
                    type="submit"
                    style={{
                        padding: '10px 15px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                        marginTop: '10px',
                        ':hover': {
                            backgroundColor: '#0056b3',
                        },
                        ':focus': {
                            outline: 'none',
                            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
                        },
                    }}
                >
                    Filter
                </button>
                <button
                    type="button"
                    style={{
                        padding: '10px 15px',
                        backgroundColor: '#dc3545',
                        marginLeft: '10px',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                        marginTop: '10px',
                    }}
                    onClick={handleReset}
                >
                    Reset
                </button>
            </form>

            <Route path="/task05/:minPrice?,:maxPrice?-:searchTerm?">
                <SearchedProducts />
            </Route>
        </div>
    );
};

export default Task05;