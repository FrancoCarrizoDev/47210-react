import { useState } from "react";

export default function useIsLoading() {
  const [isLoading, setIsLoading] = useState(true);

  const startLoading = () => setIsLoading(true);

  const stopLoading = () => setIsLoading(false);

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
}
