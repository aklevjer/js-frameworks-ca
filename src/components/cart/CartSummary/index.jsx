import Button from "../../ui/Button";

export default function CartSummary({ subtotal, discount, total }) {
  return (
    <section className="md:col-span-4">
      <h2 className="mb-4 text-2xl font-bold">Summary</h2>
      <div className="grid gap-2 rounded-md border border-neutral-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>{subtotal}</span>
        </div>

        {discount !== "$0.00" && (
          <div className="flex items-center justify-between">
            <span>Discount</span>
            <span className="text-green-800">-{discount}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span>FREE</span>
        </div>

        <hr className="my-2 border-neutral-200" />

        <div className="flex items-center justify-between font-bold">
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
