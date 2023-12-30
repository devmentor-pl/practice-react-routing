import React, { useState } from 'react';
import styled from 'styled-components';

import InputRange from './RangeInput';
import Input from './Input';

function Form({ submitHandler }) {
    const [formData, setFormData] = useState({ query: '', min: '', max: '' });

    const handleSubmit = e => {
        e.preventDefault();

        submitHandler(formData);
    };

    const changeHandler = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form style={{ margin: '1rem 0', maxWith: '350px' }} onSubmit={handleSubmit}>
            <Input
                type='text'
                name='query'
                placeholder='find course'
                changeHandler={changeHandler}
                inputValue={formData.query}
            />

            <InputRange changeHandler={changeHandler} min={0} max={100} />

            <StyledButton type='submit'>Filter</StyledButton>
        </form>
    );
}

const StyledButton = styled.button`
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    &:hover {
        background-color: white;
    }

    &:active {
        transform: scale(0.99);
    }
`;

export default Form;
