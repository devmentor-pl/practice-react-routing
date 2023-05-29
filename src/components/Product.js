import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import products from '../products.json';

const Product = (props) => {
	const { id } = useParams();
	const [product = null] = products.filter((item) => item.id === parseInt(id));

	if (product === null && Object.keys(props).length === 0) {
		return <Redirect to='/404.html' />;
	}

	const getProductFromProps = () => {
		const { name, description, price, category } = props;

		return (
			<>
				<h3>{name}</h3>
				<p>{description}</p>
				<p>Cena: {price}</p>
				<p>Kategoria: {category}</p>
			</>
		);
	};

	const getProduct = () => {
		const { name, description, price, category } = product;

		return (
			<>
				<h2>{name}</h2>
				<p>Opis: {description}</p>
				<p>Cena: {price}zł</p>
				<p>Kategoria: {category}</p>
			</>
		);
	};

	return (
		<div>
			{Object.keys(props).length > 0 ? getProductFromProps() : getProduct()}
		</div>
	);
};

export default Product;
