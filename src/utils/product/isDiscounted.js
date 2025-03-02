/**
 * Checks if the price is discounted based on the provided discounted price.
 *
 * @param {number} price - The original price of the product.
 * @param {number} discountedPrice - The discounted price of the product.
 *
 * @returns {boolean} `true` if the price is discounted, otherwise `false`.
 */
export function isDiscounted(price, discountedPrice) {
  return discountedPrice < price;
}
