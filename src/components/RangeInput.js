import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const InputRange = ({ changeHandler, min, max }) => {
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);

    const handleMinValueChange = event => {
        const newMinValue = Math.min(event.target.value, maxValue - 1);
        setMinValue(newMinValue);
        changeHandler(event);
    };

    const handleMaxValueChange = event => {
        const newMaxValue = Math.max(event.target.value, minValue + 1);
        setMaxValue(newMaxValue);
        changeHandler(event);
    };

    return (
        <StyledInputRangeContainer>
            <StyledRangeContainer>
                <StyledRangeInput
                    type='range'
                    name='min'
                    min={min}
                    max={max}
                    value={minValue}
                    onChange={handleMinValueChange}
                />
                <StyledRangeInput
                    type='range'
                    name='max'
                    min={min}
                    max={max}
                    value={maxValue}
                    onChange={handleMaxValueChange}
                />
            </StyledRangeContainer>
            <StyledPriceDisplay>
                <div>
                    <StyledLabel htmlFor='min'>price min</StyledLabel>
                    <StyledInputPrice
                        type='number'
                        id='min'
                        name='min'
                        value={minValue}
                        onChange={handleMinValueChange}
                        min={min}
                    />
                </div>
                <div>
                    <StyledLabel htmlFor='max'>price max</StyledLabel>
                    <StyledInputPrice
                        type='number'
                        id='max'
                        name='max'
                        value={maxValue}
                        onChange={changeHandler}
                        max={max}
                    />
                </div>
            </StyledPriceDisplay>
        </StyledInputRangeContainer>
    );
};

const StyledInputRangeContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 2rem 0;
`;

const StyledRangeContainer = styled.div`
    position: relative;
    min-height: 25px;
`;

const StyledRangeInput = styled.input`
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    height: 2px;
    width: 100%;
    position: absolute;
    background-color: white;
    pointer-events: none;
    z-index: 0;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        pointer-events: all;
        width: 1rem;
        height: 1rem;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 0 0 1px #c6c6c6;
        cursor: pointer;
        z-index: 999;
    }

    &::-moz-range-thumb {
        -webkit-appearance: none;
        appearance: none;
        pointer-events: all;
        width: 24px;
        height: 24px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 0 0 1px #c6c6c6;
        cursor: pointer;
    }

    &::-webkit-slider-thumb:hover {
        background: white;
        border: 1px solid #387bbe;
    }

    &::-webkit-slider-thumb:active {
        box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
        -webkit-box-shadow: inset 0 0;
        border: 3px solid #387bbe;
    }
`;

const StyledLabel = styled.label`
    margin-right: 0.5rem;
    font-weight: 500;
`;

const StyledInputPrice = styled.input`
    color: #8a8383;
    width: 50px;
    height: 30px;
    font-size: 1rem;
    text-align: center;
    border: none;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
`;

const StyledPriceDisplay = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export default InputRange;
