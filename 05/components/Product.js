import React from 'react';
const Product = ({ name, price, category, description }) => {
  return (
    <div
      style={{
        padding: '20px',
        lineHeight: '2',
        border: '2px solid lightblue',
        maxWidth: '22rem',
        margin: '2rem auto',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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