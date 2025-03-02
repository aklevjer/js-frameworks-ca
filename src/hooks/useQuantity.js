import { useState } from "react";

/**
 * Custom hook that manages the quantity of a product.
 *
 * @param {number} [initialQuantity=1] - The intial quantity of the product (default is 1).
 * @returns An object containing:
 * - `quantity`: The current quantity of the product.
 * - `increase`: Function to increase the quantity by 1.
 * - `decrease`: Function to decrease the quantity by 1 (will not go below 1).
 */
export function useQuantity(initialQuantity = 1) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return { quantity, increase, decrease };
}
