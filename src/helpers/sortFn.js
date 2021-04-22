import products from '../products.json';

const sortPriceAsc = () => products.sort((a, b) => a.price - b.price);
const sortPriceDesc = () => products.sort((a, b) => b.price - a.price);
const sortAlphAsc = () => products.sort((a, b) => a.name.localeCompare(b.name));
const sortAlphDesc = () => products.sort((a, b) => b.name.localeCompare(a.name));

const sorting = {};
sorting['price-asc'] = sortPriceAsc;
sorting['price-desc'] = sortPriceDesc;
sorting['alph-asc'] = sortAlphAsc;
sorting['alph-desc'] = sortAlphDesc;

const sortProducts = (sort) => typeof sorting[sort] === 'function' && sorting[sort]();

export default sortProducts;
