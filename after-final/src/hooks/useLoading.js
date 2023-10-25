import { useCallback, useState } from "react";

export default function useIsLoading() {
  const [isLoading, setIsLoading] = useState(true);

  const startLoading = useCallback(() => setIsLoading(true), []);

  const stopLoading = useCallback(() => setIsLoading(false), []);

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
}
