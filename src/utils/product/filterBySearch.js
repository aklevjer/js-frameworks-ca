export function filterBySearch(searchQuery, products) {
  return products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
}
