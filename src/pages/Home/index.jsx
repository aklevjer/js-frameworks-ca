import { useProducts } from "../../hooks/useProducts";
import ProductList from "../../components/product/ProductList";

export default function Home() {
  const { products, isLoading, isError } = useProducts();

  return (
    <section>
      <div className="mb-12 space-y-4 text-center">
        <h1 className="text-4xl font-bold capitalize">Everything you need in one place</h1>
        <p>Browse our selection and find the perfect products for your needs.</p>
      </div>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Oops! Failed to load products. Please try again later.</p>}
      {products && <ProductList products={products} />}
    </section>
  );
}
