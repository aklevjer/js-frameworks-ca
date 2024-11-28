import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";

export function useProducts() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { products: data, isLoading, isError };
}
