import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

/**
 * Displays the navigation links and closes the menu when clicking outside.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.isMenuOpen - Whether the mobile menu is currently open.
 * @param {Function} props.setIsMenuOpen - Function to toggle menu visibility.
 *
 * @returns {JSX.Element} The rendered nav component.
 */
export default function Nav({ isMenuOpen, setIsMenuOpen }) {
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <nav
      ref={navRef}
      className={twMerge(
        "absolute left-0 top-[60px] z-10 hidden w-full border-b border-neutral-200 bg-white pb-5 shadow-bottom md:static md:block md:w-auto md:border-none md:p-0 md:shadow-none",
        isMenuOpen && "block",
      )}
    >
      <ul className="flex flex-col items-center gap-6 font-semibold md:flex-row">
        <li>
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="transition-colors hover:text-neutral-600"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="transition-colors hover:text-neutral-600"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
