export const isMatch = (product, searchTerm) => {
  if (!searchTerm) return true;
  const searchLower = searchTerm.toLowerCase();
  return (
    product.name.toLowerCase().includes(searchLower) ||
    product.description.toLowerCase().includes(searchLower)
  );
};
