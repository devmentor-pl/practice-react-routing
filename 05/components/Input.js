import React from 'react';

const Input = ({ value, onChange, placeholder, type = 'text' }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    style={{
      padding: '10px',
      margin: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    }}
  />
);

export default Input;