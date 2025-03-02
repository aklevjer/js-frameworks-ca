import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

/**
 * Renders a reusable button with customizable styles and functionality.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.variant - The variant of button (primary, secondary).
 * @param {boolean} [props.asLink] - Whether the button should render as a link instead of a button (optional).
 * @param {string} [props.type] - The type of the button (ie. submit, reset, button).
 * @param {string} [props.path] - The path to navigate to if `asLink` is true.
 * @param {Function} [props.onClick] - The function to call when the button is clicked (optional).
 * @param {string} [props.className] - Additional CSS classes to style the button (optional).
 * @param {React.ReactNode} props.children - The content (text or elements) to display inside the button.
 *
 * @returns {JSX.Element} The rendered button component.
 */
export default function Button({ variant, asLink, type, path, onClick, className, children }) {
  const base = "inline-block rounded-md px-4 py-2 font-medium";

  const variants = {
    primary: "bg-teal-800 text-neutral-100 transition-colors hover:bg-teal-900",
    secondary:
      "border border-neutral-900 transition-all hover:ring-1 hover:ring-inset hover:ring-neutral-900",
  };

  const classes = twMerge(base, variants[variant], className);

  if (asLink) {
    return (
      <Link to={path} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
