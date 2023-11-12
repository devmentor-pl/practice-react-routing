import React from 'react';
import styled from 'styled-components';

function Input({ name, type, placeholder, changeHandler, inputValue }) {
    return (
        <StyledInput
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={changeHandler}
            value={inputValue}
        />
    );
}

const StyledInput = styled.input`
    min-width: 300px;
    color: #8a8383;
    height: 30px;
    font-size: 0.75rem;
    text-align: center;
    border: none;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    border-radius: 1rem;
`;

export default Input;
