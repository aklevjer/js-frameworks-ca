/**
 * Formats a given number as a currency string in USD.
 *
 * @param {number} value - The numeric value to be formatted as a price.
 * @returns {string} The formatted price string in USD.
 */
export function formatPrice(value) {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
