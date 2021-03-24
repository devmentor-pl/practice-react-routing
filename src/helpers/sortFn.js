import products from '../products.json';

const sortPriceAsc = () => products.sort((a, b) => a.price - b.price);
const sortPriceDesc = () => products.sort((a, b) => b.price - a.price);
const sortAlphAsc = () => products.sort((a, b) => a.name.localeCompare(b.name));
const sortAlphDesc = () => products.sort((a, b) => b.name.localeCompare(a.name));

const sortProducts = (sort) => {
    switch (sort) {
    case 'price-desc':
        return sortPriceDesc();
    case 'price-asc':
        return sortPriceAsc();
    case 'alph-asc':
        return sortAlphAsc();
    case 'alph-desc':
        return sortAlphDesc();
    default:
        return products;
    }
};

export default sortProducts;
