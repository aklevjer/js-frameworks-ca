import { Link } from "react-router-dom";
import { BiMenu, BiX, BiShoppingBag } from "react-icons/bi";
import { useCartStore } from "../../../../store/cartStore";

/**
 * Renders a mobile menu button and a cart icon with the number of items in the cart.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.isMenuOpen - Whether the mobile menu is currently open.
 * @param {Function} props.setIsMenuOpen - Function to toggle menu visibility.
 *
 * @returns {JSX.Element} The rendered menu and cart component.
 */
export default function MenuCart({ isMenuOpen, setIsMenuOpen }) {
  const itemsCount = useCartStore((state) => state.getItemsCount());

  const handleToggleMenu = (event) => {
    event.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        aria-label="Menu"
        aria-expanded={isMenuOpen}
        onClick={handleToggleMenu}
        className="md:hidden"
      >
        {isMenuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
      </button>

      <Link
        to="/checkout"
        className="flex items-center gap-1 font-semibold transition-colors hover:text-neutral-600"
      >
        <BiShoppingBag size={18} />
        <span className="sr-only md:not-sr-only">Cart</span>
        <span>({itemsCount})</span>
      </Link>
    </div>
  );
}
