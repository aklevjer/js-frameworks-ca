import { BiPlus, BiMinus } from "react-icons/bi";

/**
 * Renders a quantity control that allows users to increase and decrease quantity of a product.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {number} props.quantity - The current quantity of the product.
 * @param {Function} props.onIncrease - Callback function to increase the quantity.
 * @param {Function} props.onDecrease - Callback function to decrease the quantity.
 *
 * @returns {JSX.Element} The rendered quantity control component.
 */
export default function QuantityControl({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="inline-flex items-center rounded-md border border-neutral-200 bg-white">
      <button
        aria-label="Decrease quantity"
        onClick={onDecrease}
        className="rounded-l-md p-4 transition-colors hover:bg-teal-50"
      >
        <BiMinus />
      </button>
      <span className="grid min-w-8 place-items-center font-bold">{quantity}</span>
      <button
        aria-label="Increase quantity"
        onClick={onIncrease}
        className="rounded-r-md p-4 transition-colors hover:bg-teal-50"
      >
        <BiPlus />
      </button>
    </div>
  );
}
