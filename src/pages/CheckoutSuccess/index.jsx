import { useEffect } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { useCartStore } from "../../store/cartStore";
import { getOrderNumber } from "../../utils/misc/getOrderNumber";
import Button from "../../components/ui/Button";

export default function CheckoutSuccess() {
  const clearCart = useCartStore((state) => state.clearCart);
  const orderNumber = getOrderNumber();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <section className="mx-auto max-w-prose space-y-4 text-center">
      <BiCheckCircle size={72} className="mx-auto text-green-800" />
      <h1 className="text-3xl font-bold capitalize">Thank you for shopping with us!</h1>
      <p>
        Your order <strong>#{orderNumber}</strong> has been received and is beeing processed. Keep
        an eye out for our upcoming shipping confirmation email.
      </p>
      <Button asLink variant="primary" path="/">
        Continue Shopping
      </Button>
    </section>
  );
}
