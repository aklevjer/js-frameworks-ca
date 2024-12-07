import { useState, useMemo } from "react";
import { useProducts } from "../../hooks/useProducts";
import { filterBySearch } from "../../utils/product/filterBySearch";
import { sortByOrder } from "../../utils/product/sortByOrder";

import Page from "../../components/layout/Page";
import SearchBar from "../../components/ui/SearchBar";
import SortSelect from "../../components/ui/SortSelect";
import Loader from "../../components/ui/Loader";
import Alert from "../../components/ui/Alert";
import ProductList from "../../components/product/ProductList";

export default function Home() {
  const { products, isLoading, isError } = useProducts();
  const disabledState = isLoading || isError;
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const filteredProducts = useMemo(() => {
    if (products) {
      const filtered = filterBySearch(searchQuery, products);
      return sortByOrder(filtered, sortOrder);
    }
    return [];
  }, [products, searchQuery, sortOrder]);

  return (
    <Page
      title="Home"
      description="Find everything you need at DirectShop, with a wide selection of products at great prices."
    >
      <section>
        <div className="mb-12 space-y-4 text-center">
          <h1 className="text-4xl font-bold capitalize">Everything you need in one place</h1>
          <p>Browse our selection and find the perfect products for your needs.</p>
        </div>

        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row">
          <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} disabled={disabledState} />
          <SortSelect onSort={setSortOrder} disabled={disabledState} />
        </div>

        {isLoading && <Loader />}

        {isError && (
          <Alert type="error" message="Oops! Failed to load products. Please try again later." />
        )}

        {searchQuery && (
          <p className="mb-6 flex gap-1">
            Found {filteredProducts.length} result{filteredProducts.length !== 1 ? "s" : ""} for
            <span className="font-bold overflow-wrap-anywhere">‘{searchQuery}’</span>
          </p>
        )}

        {filteredProducts.length > 0 && <ProductList products={filteredProducts} />}
      </section>
    </Page>
  );
}
