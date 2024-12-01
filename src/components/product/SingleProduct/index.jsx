import { useCartStore } from "../../../store/cartStore";
import { useQuantity } from "../../../hooks/useQuantity";
import { isDiscounted } from "../../../utils/product/isDiscounted";
import { getDiscountPercent } from "../../../utils/product/getDiscountPercent";
import { formatPrice } from "../../../utils/product/formatPrice";

import Button from "../../ui/Button";
import StarRating from "../StarRating";
import QuantityControl from "../QuantityControl";
import Reviews from "../Reviews";

export default function SingleProduct({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const { quantity, increase, decrease } = useQuantity();
  const { title, description, price, discountedPrice, image, rating, reviews } = product;

  const isDiscount = isDiscounted(price, discountedPrice);
  const discountPercent = getDiscountPercent(price, discountedPrice);
  const formattedPrice = formatPrice(price);
  const formattedDiscountPrice = formatPrice(discountedPrice);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <img
        src={image.url}
        alt={`Close-up of ${title}`}
        className="aspect-4/3 size-full rounded-md object-cover"
      />

      <div className="md:ml-6">
        <h1 className="mb-2 text-2xl font-bold">{title}</h1>

        <StarRating rating={rating} />

        {isDiscount ? (
          <div className="mb-2 mt-4">
            <span className="block text-sm font-semibold text-neutral-600 line-through">
              {formattedPrice}
            </span>

            <div className="flex items-center gap-3">
              <span className="text-xl font-bold">{formattedDiscountPrice}</span>
              <span className="rounded-md bg-teal-900 px-2 py-1 text-sm font-medium text-neutral-100">
                -{discountPercent}%
              </span>
            </div>
          </div>
        ) : (
          <span className="mb-1 mt-4 block text-xl font-bold">{formattedDiscountPrice}</span>
        )}

        <div className="mb-6 space-x-1 text-m">
          <span className="font-semibold text-neutral-600">Availability:</span>
          <span className="font-bold text-green-800">In stock</span>
        </div>

        <p>{description}</p>

        <hr className="my-6 border-neutral-200" />

        <div className="flex flex-wrap gap-4">
          <QuantityControl quantity={quantity} onIncrease={increase} onDecrease={decrease} />
          <Button variant="primary" onClick={handleAddToCart} className="py-3">
            Add to Cart
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold">Reviews</h2>
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
}
