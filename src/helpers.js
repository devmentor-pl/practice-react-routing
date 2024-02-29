const searchByCategory = (alias, items) => {
	return items.filter(product => product.category.toLowerCase() === alias)
}

const searchById = (id, items) => {
	return items.filter(product => product.id === parseInt(id))
}

const sortLowToHigh = items => {
	return items.sort((a, b) => b.price - a.price)
}

const sortHighToLow = items => {
	return items.sort((a, b) => a.price - b.price)
}

const sortByValueOrName = (items, value0, value1, name) => {
	return items.filter(
		prod => (prod.price > value0 && prod.price < value1) || prod.name.toLowerCase().includes(name.toLowerCase())
	)
}

const searchByName = (name, items) => {
	return items.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
}

export { searchByCategory, searchById, sortLowToHigh, sortHighToLow, sortByValueOrName, searchByName }
