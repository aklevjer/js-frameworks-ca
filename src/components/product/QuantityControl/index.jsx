import { BiPlus, BiMinus } from "react-icons/bi";

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
