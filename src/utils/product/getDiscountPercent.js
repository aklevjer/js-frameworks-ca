/**
 * Calculates the discount percentage between the original price and the discounted price.
 *
 * @param {number} price - The original price of the product.
 * @param {number} discountedPrice - The discounted price of the product.
 *
 * @returns {number} The discount percentage, rounded to the nearest whole number.
 */
export function getDiscountPercent(price, discountedPrice) {
  return Math.round(((price - discountedPrice) / price) * 100);
}
