import Button from "../../ui/Button";

/**
 * Displays a cart summary with prices and a checkout CTA.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.subtotal - The subtotal price of all cart items as a formatted string.
 * @param {string} props.discount - The amount of discount as a formatted string.
 * @param {string} props.total - The total price of all cart items after applying any discounts, as a formatted string.
 *
 * @returns {JSX.Element} The rendered cart summary component.
 */
export default function CartSummary({ subtotal, discount, total }) {
  return (
    <section className="md:col-span-4">
      <h2 className="mb-4 text-2xl font-bold">Summary</h2>
      <div className="grid gap-2 rounded-md border border-neutral-200 bg-white p-6">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{subtotal}</span>
        </div>

        {discount !== "$0.00" && (
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-800">-{discount}</span>
          </div>
        )}

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>FREE</span>
        </div>

        <hr className="my-2 border-neutral-200" />

        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>{total}</span>
        </div>

        <Button asLink variant="primary" path="/checkout/success" className="mt-4 text-center">
          Checkout Now
        </Button>
      </div>
    </section>
  );
}
