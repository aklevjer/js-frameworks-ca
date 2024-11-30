import { useState } from "react";

export function useQuantity(initialQuantity = 1) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return { quantity, increase, decrease };
}
