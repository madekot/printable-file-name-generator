import { useState, useEffect } from "react";
import { useExtraCopies } from "./useExtraCopies";
import { useFieldVisibility } from "./useFieldVisibility";
import { useObserverReset } from "@entities/reset-manager";

export const useBonusCopiesManager = () => {
  const { setExtraCopies, extraCopies, resetExtraCopies } = useExtraCopies();
  const { isVisible, toggleVisibility, hide } = useFieldVisibility(false);
  const [extraCopiesPersist, setExtraCopiesPersist] = useState(extraCopies);

  useEffect(() => {
    if (!isVisible) {
      setExtraCopiesPersist(extraCopies);
      resetExtraCopies();
      return;
    }

    setExtraCopies(extraCopiesPersist || 1);
  }, [isVisible]);

  useObserverReset(hide);

  return {
    extraCopies,
    setExtraCopies,
    resetExtraCopies,
    isVisible,
    toggleVisibility,
  };
};
