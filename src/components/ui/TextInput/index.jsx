import { twMerge } from "tailwind-merge";
import { BiSolidErrorCircle } from "react-icons/bi";

export default function TextInput({ id, type, label, placeholder, register, error }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-m font-medium">
        {label}
      </label>

      <div className="relative">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...register(id)}
          className={twMerge(
            "w-full rounded-md p-2 outline-none ring-1 ring-neutral-500 focus:ring-2 focus:ring-neutral-900",
            error && "pr-10 ring-red-800 focus:ring-red-800",
          )}
        />

        {error && (
          <BiSolidErrorCircle
            size={24}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-red-800"
          />
        )}
      </div>

      {error && (
        <p role="alert" className="text-m font-medium text-red-800">
          {error.message}
        </p>
      )}
    </div>
  );
}
