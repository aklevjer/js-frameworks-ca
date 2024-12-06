import { BiErrorCircle, BiCheckCircle } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

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
