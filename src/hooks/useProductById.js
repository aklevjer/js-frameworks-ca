import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/products";

export function useProductById(productId) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
  });

  return { product: data, isLoading, isError };
}
