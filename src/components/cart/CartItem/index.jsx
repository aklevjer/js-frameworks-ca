import { BiTrash } from "react-icons/bi";
import { useCartStore } from "../../../store/cartStore";
import { formatPrice } from "../../../utils/misc/formatPrice";
import QuantityControl from "../../product/QuantityControl";

export default function CartItem({ cartItem }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore();
  const { id, title, discountedPrice, image, quantity } = cartItem;
  const totalPrice = formatPrice(discountedPrice * quantity);

  const handleIncrease = () => increaseQuantity(id);
  const handleDecrease = () => decreaseQuantity(id);
  const handleRemove = () => removeFromCart(id);

  return (
    <tr>
      <td className="py-4">
        <div className="flex max-w-64 gap-2">
          <img
            src={image.url}
            alt={`Close-up of ${title}`}
            className="size-24 flex-shrink-0 rounded-md object-cover"
          />

          <div className="space-y-2">
            <h3 className="font-bold">{title}</h3>
            <span className="block text-m md:hidden">Quantity: {quantity}x</span>
            <button
              onClick={handleRemove}
              className="flex items-center gap-1 text-m font-semibold text-neutral-600 transition-colors hover:text-neutral-900"
            >
              <BiTrash size={18} />
              Remove
            </button>
          </div>
        </div>
      </td>

      <td className="hidden px-2 py-4 md:table-cell">
        <QuantityControl
          quantity={quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      </td>

      <td className="py-4 text-right">
        <span>{totalPrice}</span>
      </td>
    </tr>
  );
}
