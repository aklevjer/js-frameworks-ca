/**
 * Sorts the products based on the provided sort order.
 *
 * @param {Object[]} products - An array of product objects to be sorted.
 * @param {string} sortOrder - The criteria to sort products by (i.e "title-asc", "price-desc").
 *
 * @returns {Object[]} The sorted array of products.
 */
export function sortByOrder(products, sortOrder) {
  return [...products].sort((a, b) => {
    switch (sortOrder) {
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });
}
