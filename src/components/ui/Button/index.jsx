import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

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
