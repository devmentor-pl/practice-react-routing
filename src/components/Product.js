import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ id, name, description, price, link = null }) => {

    const productTitle = link === null
        ? name
        // : <a href={ link }>{name}</a>;
        : <Link to={link}>{name}</Link>

    return (
        <article>
            {
                link
                    ? (
                        <>
                            <div>{productTitle}</div>
                            {/* <div>Opis: {description}</div> */}
                            {/* <div>Cena: {price}</div> */}
                        </>
                    )
                    : (
                        <div>
                            <hr />
                            <div>
                                Tytuł: <Link to={'/task02/product-' + id}>
                                    {name}
                                </Link>
                            </div>
                            <div>Opis: {description}</div>
                            <div>Cena: {price}</div>
                        </div>
                    )
            }
        </article>
    );
}

export default Product;