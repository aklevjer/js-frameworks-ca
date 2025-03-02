import { twMerge } from "tailwind-merge";
import { BiSolidErrorCircle } from "react-icons/bi";

/**
 * Renders a textarea that integrates with React Hook Form and optionally displays an error message.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.id - The unique ID for the textarea.
 * @param {string} props.label - The text to display as the label for the textarea.
 * @param {string} props.placeholder - The placeholder text to display in the textarea.
 * @param {Function} props.register - React Hook Form register function to bind the textarea to form state.
 * @param {Object} [props.error] - Optional error object containing a message to display.
 * @param {string} props.error.message - The error message to display if there is an error.
 *
 * @returns {JSX.Element} The rendered textarea component.
 */
export default function Textarea({ id, label, placeholder, register, error }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-m font-medium">
        {label}
      </label>

      <div className="relative">
        <textarea
          id={id}
          placeholder={placeholder}
          {...register(id)}
          className={twMerge(
            "min-h-32 w-full resize-none rounded-md p-2 align-top outline-none ring-1 ring-neutral-500 focus:ring-2 focus:ring-neutral-900",
            error && "pr-10 ring-red-800 focus:ring-red-800",
          )}
        ></textarea>

        {error && <BiSolidErrorCircle size={24} className="absolute right-2 top-2 text-red-800" />}
      </div>

      {error && (
        <p role="alert" className="text-m font-medium text-red-800">
          {error.message}
        </p>
      )}
    </div>
  );
}
