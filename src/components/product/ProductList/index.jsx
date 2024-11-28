import ProductCard from "../ProductCard";

export default function ProductList({ products }) {
  return (
    <ul className="grid grid-cols-autofill-220 gap-x-6 gap-y-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
