import { isDiscounted } from "../../../utils/product/isDiscounted";
import { getDiscountPercent } from "../../../utils/product/getDiscountPercent";
import { formatPrice } from "../../../utils/misc/formatPrice";
import Button from "../../ui/Button";

export default function ProductCard({ product }) {
  const { id, title, price, discountedPrice, image } = product;

  const isDiscount = isDiscounted(price, discountedPrice);
  const discountPercent = getDiscountPercent(price, discountedPrice);
  const formattedPrice = formatPrice(price);
  const formattedDiscountPrice = formatPrice(discountedPrice);

  return (
    <li className="grid overflow-hidden rounded-md border border-neutral-200 bg-white">
      <div className="relative">
        <img
          src={image.url}
          alt={`Close-up of ${title}`}
          className="aspect-3/2 size-full object-cover"
        />

        {isDiscount && (
          <span className="absolute right-0 top-0 rounded-bl-md bg-teal-900 px-2 py-1 text-m font-medium text-neutral-100">
            -{discountPercent}%
          </span>
        )}
      </div>

      <div className="flex flex-col justify-between gap-1 p-4 font-semibold">
        <h2 className="text-lg">{title}</h2>

        {isDiscount ? (
          <div className="flex items-center gap-3">
            <span className="text-sm text-neutral-600 line-through">{formattedPrice}</span>
            <span className="text-green-800">{formattedDiscountPrice}</span>
          </div>
        ) : (
          <span>{formattedDiscountPrice}</span>
        )}

        <Button
          asLink
          variant="primary"
          path={`/product/${id}`}
          className={"mt-2 text-center text-sm"}
        >
          View Product
        </Button>
      </div>
    </li>
  );
}
