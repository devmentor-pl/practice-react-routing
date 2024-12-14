import React from 'react';

const Product = ({ name, price, category, description }) => {
  return (
    <div
      style={{
        padding: '10px',
        lineHeight: '2',
        border: '2px solid blue',
        backgroundColor: 'lightblue',
      }}
    >
      <h1 style={{ borderBottom: '2px solid #000', paddingBottom: '10px' }}>
        {name}
      </h1>
      <p>{description}</p>
      <p>{category}</p>
      <p>{price}</p>
    </div>
  );
};

export default Product;