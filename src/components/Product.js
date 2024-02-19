import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
    {"id": 1, "name": "Elegant Watch", "description": "Klasyczny zegarek z mechanizmem kwarcowym i skórzanym paskiem.", "category": "Accessories", "price": 250},
    {"id": 2, "name": "Leather Wallet", "description": "Portfel wykonany z wysokiej jakości skóry, z licznymi przegródkami.", "category": "Accessories", "price": 85},
    {"id": 3, "name": "Sports Sneakers", "description": "Wygodne i stylowe obuwie sportowe, idealne na co dzień.", "category": "Footwear", "price": 199},
    {"id": 4, "name": "Smartphone Holder", "description": "Uniwersalny uchwyt do smartfona, z możliwością regulacji.", "category": "Electronics", "price": 29}
];

const Product = () => {
    const { id } = useParams();

    const product = products.find(product => product.id === parseInt(id, 10));

    if (!product) {
        return <p>Towar o podanym ID nie został znaleziony.</p>;
    }

    return (
        <div>
        <h2>Product Details</h2>
        <p>ID towaru: {product.id}</p>
        <p>Nazwa: {product.name}</p>
        <p>Opis: {product.description}</p>
        <p>Kategoria: {product.category}</p>
        <p>Cena: {product.price} zł</p>
        </div>
    );
}

export default Product;