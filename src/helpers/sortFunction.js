import products from './../products.json';

const sortFunction = (sortName) => {
	switch (sortName) {
		case 'price-desc':
			return sortPriceDesc();
		case 'price-asc':
			return sortPriceAsc();
		default:
			return products;
	}
}

const sortPriceDesc = () => products.sort((a, b) => b.price - a.price);
const sortPriceAsc = () => products.sort((a, b) => a.price - b.price);

export default sortFunction;