import { BiShoppingBag } from "react-icons/bi";
import Button from "../../ui/Button";

export default function EmptyCart() {
  return (
    <section className="mx-auto max-w-prose space-y-4 text-center">
      <div className="mx-auto grid size-16 place-items-center rounded-full border-4 border-teal-800">
        <BiShoppingBag size={40} className="text-teal-800" />
      </div>
      <h1 className="text-3xl font-bold capitalize">Your cart is currently empty</h1>
      <p>
        It looks like you haven’t added anything to your cart yet. Explore our wide range of
        products and find something you’ll love today!
      </p>
      <Button asLink variant="primary" path="/">
        Shop Now
      </Button>
    </section>
  );
}
