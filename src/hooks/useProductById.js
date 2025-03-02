import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/products";

/**
 * Custom hook that retrieves a single product from the API.
 *
 * @param {string} productId - The ID of the product to retrieve.
 * @returns An object containing:
 * - `product`: The product data (or `undefined` if not found).
 * - `isLoading`: Indicating whether the request is in progress.
 * - `isError`: Indicating whether the request failed.
 */
export function useProductById(productId) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
  });

  return { product: data, isLoading, isError };
}
