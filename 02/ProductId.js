import React from "react";
import { useParams } from "react-router-dom";

const ProductId = () => {
    const { id } = useParams();
    return (
        <p>This is product {id}</p>
    )
}
export default ProductId;