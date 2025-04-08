import { useEffect } from "react";
import { observerReset } from "./observer-reset";

export const useObserverReset = (callback?: () => void) => {
  useEffect(() => {
    if (callback) {
      const unsubscribe = observerReset.subscribe(callback);
      return unsubscribe;
    }
  }, [callback]);

  return { resetAll: observerReset.resetAll };
};
