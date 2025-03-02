import ProductCard from "../ProductCard";

/**
 * Displays a list of products using the `ProductCard` component for each product.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Object[]} props.products - An array of product objects.
 *
 * @returns {JSX.Element} The rendered product list component.
 */
export default function ProductList({ products }) {
  return (
    <ul className="grid grid-cols-autofill-220 gap-x-6 gap-y-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
