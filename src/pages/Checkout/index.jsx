import { useCartStore } from "../../store/cartStore";
import { formatPrice } from "../../utils/misc/formatPrice";

import Page from "../../components/layout/Page";
import EmptyCart from "../../components/cart/EmptyCart";
import CartReview from "../../components/cart/CartReview";
import CartSummary from "../../components/cart/CartSummary";

export default function Checkout() {
  const { cart, getTotalPrice, getSubtotalPrice, getTotalDiscount } = useCartStore();

  if (!cart.length) {
    return (
      <Page title="Checkout" description="Your cart is currently empty. Start shopping now!">
        <EmptyCart />
      </Page>
    );
  }

  const subtotal = formatPrice(getSubtotalPrice());
  const discount = formatPrice(getTotalDiscount());
  const total = formatPrice(getTotalPrice());

  return (
    <Page
      title="Checkout"
      description="Complete your order at DirectShop and enjoy a seamless checkout experience."
    >
      <section>
        <h1 className="mb-12 text-center text-3xl font-bold capitalize">Complete your order</h1>
        <div className="grid gap-12 md:grid-cols-12">
          <CartReview cart={cart} total={total} />
          <CartSummary subtotal={subtotal} discount={discount} total={total} />
        </div>
      </section>
    </Page>
  );
}
