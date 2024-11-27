import { Link } from "react-router-dom";
import { BiMenu, BiX, BiShoppingBag } from "react-icons/bi";

export default function MenuCart({ isMenuOpen, setIsMenuOpen }) {
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
        {isMenuOpen ? <BiX size="28" /> : <BiMenu size="28" />}
      </button>

      <Link
        to="/checkout"
        className="flex items-center gap-1 font-semibold transition-colors hover:text-neutral-600"
      >
        <BiShoppingBag size={18} />
        <span className="sr-only md:not-sr-only">Cart</span>
        <span>(0)</span>
      </Link>
    </div>
  );
}
