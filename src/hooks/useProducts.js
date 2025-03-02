import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";

/**
 * Custom hook that retrieves a list of products from the API.
 *
 * @returns An object containing:
 * - `products`: An array of product objects (empty if none found).
 * - `isLoading`: Indicating whether the request is in progress.
 * - `isError`: Indicating whether the request failed.
 */
export function useProducts() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { products: data, isLoading, isError };
}
