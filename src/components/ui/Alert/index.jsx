import { BiErrorCircle, BiCheckCircle } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

/**
 * Displays a styled alert with an icon and a message.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.type - The type of alert (error, success).
 * @param {string} props.message - The message to display in the alert.
 *
 * @returns {JSX.Element} The rendered alert component.
 */
export default function Alert({ type, message }) {
  const types = {
    error: {
      icon: BiErrorCircle,
      iconColor: "text-red-800",
      containerColor: "border-red-800 bg-red-50",
    },
    success: {
      icon: BiCheckCircle,
      iconColor: "text-green-800",
      containerColor: "border-green-800 bg-green-50",
    },
  };

  const { icon: Icon, iconColor, containerColor } = types[type] || types.success;

  return (
    <div className={twMerge("flex items-center gap-2 rounded-md border-2 p-4", containerColor)}>
      <Icon size={24} className={twMerge("flex-shrink-0", iconColor)} />
      <p role="alert">{message}</p>
    </div>
  );
}
