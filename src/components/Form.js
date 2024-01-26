import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {

    const initState = {
        minPrice: '',
        maxPrice: '',
        searchTerm: ''
    }

    const [formFields, setFormFields] = useState(initState)
    const history = useHistory()
    const { minPrice, maxPrice, searchTerm } = formFields

    const submitHandler = e => {
        e.preventDefault()

        if (minPrice !== '' && maxPrice !== '' && searchTerm !== '') {
            history.push(`/task05/${minPrice},${maxPrice}-${searchTerm}`)
            setFormFields(initState)

        } else alert('Please insert all fields')
    }

    const changeHandler = e => {
        const { name, value } = e.target

        setFormFields(state => {
            return { ...state, [name]: value }
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <label style={{ display: 'block' }}>
                <input value={minPrice} onChange={changeHandler} type="number" name='minPrice' min='10' max='1000' /> Min price
            </label>
            <label style={{ display: 'block' }}>
                <input value={maxPrice} onChange={changeHandler} type="number" name='maxPrice' min='10' max='1000' /> Max price
            </label>
            <label style={{ display: 'block' }}>
                <input value={searchTerm} onChange={changeHandler} type="text" name='searchTerm' /> Search term
            </label>
            <input type="submit" value='submit' />
        </form>
    )
}

export default Form