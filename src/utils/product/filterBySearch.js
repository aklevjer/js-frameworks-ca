/**
 * Filters the products by title based on the search query.
 *
 * @param {string} searchQuery - The search query to filter products by.
 * @param {Object[]} products - An array of product objects to be filtered.
 *
 * @returns {Object[]} The filtered array of products that match the search query.
 */
export function filterBySearch(searchQuery, products) {
  return products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
}
