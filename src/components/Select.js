import React from 'react';
import styled from 'styled-components';

function Select({ options, changeHandler, defaultValue }) {
    const renderOptions = () => {
        return options.map((item, index) => {
            const { id, value, text, defaultValue } = item;
            return (
                <option key={id} value={value} disabled={index === 0}>
                    {text}
                </option>
            );
        });
    };

    return (
        <StyledSelect value={defaultValue} onChange={changeHandler}>
            {renderOptions(options)}
        </StyledSelect>
    );
}

const StyledSelect = styled.select`
    min-width: 150px;
    padding: 0.5rem;
    border: none;
    border-radius: 1rem;
    font-weight: 600;
    margin: 1rem 0;
`;
export default Select;
