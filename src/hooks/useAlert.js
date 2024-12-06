import { useState } from "react";

export function useAlert() {
  const [alertMessage, setAlertMessage] = useState(null);

  const showAlert = (message, duration = 3000) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(null), duration);
  };

  return { alertMessage, showAlert };
}
