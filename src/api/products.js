const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts() {
  const response = await fetch(API_URL);
  const responseData = await response.json();

  if (!response.ok) {
    const errorMessage = responseData?.errors[0]?.message || "Failed to get products";
    throw new Error(errorMessage);
  }

  return responseData.data;
}

export async function getProductById(productId) {
  const response = await fetch(`${API_URL}/${productId}`);
  const responseData = await response.json();

  if (!response.ok) {
    const errorMessage = responseData?.errors[0]?.message || "Failed to get the product";
    throw new Error(errorMessage);
  }

  return responseData.data;
}
