import { BiErrorCircle } from "react-icons/bi";

export default function ErrorMessage({ message }) {
  return (
    <div className="flex items-center gap-2 rounded-md border-2 border-red-800 bg-red-50 p-4">
      <BiErrorCircle size={24} className="flex-shrink-0 text-red-800" />
      <p role="alert">{message}</p>
    </div>
  );
}
