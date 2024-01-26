import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Select = () => {
    const [sortMethod, setSortMethod] = useState('')
    const selectHandler = (e) => {
        setSortMethod(e.target.value)
    }

    if (sortMethod === "price-desc") {
        return <Redirect to='/task04/price-desc' />
    }
    else if (sortMethod === "price-asc") {
        return <Redirect to='/task04/price-asc' />
    }

    return (
        <select onChange={selectHandler}>
            <option value="">Select a sorting method</option>
            <option value="price-desc">Price descending</option>
            <option value="price-asc">Price ascending</option>
        </select>
    )
}

export default Select