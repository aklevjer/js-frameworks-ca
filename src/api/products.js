const API_URL = import.meta.env.VITE_API_URL;

/**
 * Fetches products from the API.
 *
 * @returns {Promise<Object[]>} A promise that resolves to an array of product objects upon successful retrieval.
 * @throws {Error} If there is an error during the retrieval process.
 */
export async function getProducts() {
  const response = await fetch(API_URL);
  const responseData = await response.json();

  if (!response.ok) {
    const errorMessage = responseData?.errors[0]?.message || "Failed to get products";
    throw new Error(errorMessage);
  }

  return responseData.data;
}

/**
 * Fetches a product by its ID from the API.
 *
 * @param {string} productId - The ID of the product.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing product data upon successful retrieval.
 * @throws {Error} If there is an error during the retrieval process.
 */
export async function getProductById(productId) {
  const response = await fetch(`${API_URL}/${productId}`);
  const responseData = await response.json();

  if (!response.ok) {
    const errorMessage = responseData?.errors[0]?.message || "Failed to get the product";
    throw new Error(errorMessage);
  }

  return responseData.data;
}
