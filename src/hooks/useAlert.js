import { useState } from "react";

/**
 * Custom hook that manages alert messages with timeout.
 *
 * @returns An object containing:
 * - `alertMessage`: The current message or `null` if no alert is displayed.
 * - `showAlert`: Function to display an alert for a specified duration.
 */
export function useAlert() {
  const [alertMessage, setAlertMessage] = useState(null);

  const showAlert = (message, duration = 3000) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(null), duration);
  };

  return { alertMessage, showAlert };
}
