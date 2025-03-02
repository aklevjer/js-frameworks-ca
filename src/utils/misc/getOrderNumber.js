/**
 * Generates a random order number between 10000 and 99999.
 *
 * @returns {number} A random 5-digit order number.
 */
export function getOrderNumber() {
  return Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
}
