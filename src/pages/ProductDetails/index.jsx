import { useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useProductById } from "../../hooks/useProductById";

import Page from "../../components/layout/Page";
import Button from "../../components/ui/Button";
import Loader from "../../components/ui/Loader";
import Alert from "../../components/ui/Alert";
import SingleProduct from "../../components/product/SingleProduct";

/**
 * Renders the Product Details page, displaying information about a specific product.
 *
 * @component
 * @returns {JSX.Element} The rendered product details page component.
 */
export default function ProductDetails() {
  const { id } = useParams();
  const { product, isLoading, isError } = useProductById(id);

  return (
    <Page
      title={product?.title || "Product"}
      description={product?.description || "Discover more about this product at DirectShop."}
    >
      <section className="space-y-8">
        <Button asLink variant="secondary" path="/" className="inline-flex items-center gap-2">
          <BiArrowBack size={18} />
          <span>Go back</span>
        </Button>

        {isLoading && <Loader />}

        {isError && (
          <Alert type="error" message="Oops! Failed to load product. Please try again later." />
        )}

        {product && <SingleProduct product={product} />}
      </section>
    </Page>
  );
}
