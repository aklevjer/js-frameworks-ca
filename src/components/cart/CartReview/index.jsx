import CartItem from "../CartItem";

/**
 * Displays a cart review as a table with cart items and a total price.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Object[]} props.cart - An array of cart item objects.
 * @param {string} props.total - The total price of all cart items as a formatted string.
 *
 * @returns {JSX.Element} The rendered cart review component.
 */
export default function CartReview({ cart, total }) {
  return (
    <section className="md:col-span-8">
      <h2 className="mb-4 text-2xl font-bold capitalize">Your cart</h2>
      <table className="w-full">
        <thead className="whitespace-nowrap border-b border-neutral-300">
          <tr>
            <th className="py-2 text-left font-semibold">Product</th>
            <th className="hidden p-2 text-left font-semibold md:table-cell">Quantity</th>
            <th className="py-2 text-right font-semibold">Total Price</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-neutral-200">
          {cart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </tbody>

        <tfoot className="border-t border-neutral-300">
          <tr>
            <td colSpan="3" className="space-x-2 py-2 text-right font-bold">
              <span>Cart Total</span>
              <span>{total}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}
