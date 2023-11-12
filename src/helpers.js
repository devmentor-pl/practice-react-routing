export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function findMinMaxPrice(data) {
    const prices = data.map(item => item.price);
    const minValue = Math.min(...prices);
    const maxValue = Math.max(...prices);
    return { minValue, maxValue };
}
