import { useState } from "react";

const INITIAL_EXTRA_COPIES = 0;

export const useExtraCopies = (initialValue: number = INITIAL_EXTRA_COPIES) => {
  const [extraCopies, _setExtraCopies] = useState<number>(
    Math.max(initialValue, INITIAL_EXTRA_COPIES)
  );

  const setExtraCopies = (value: number) => {
    _setExtraCopies(Math.max(value, INITIAL_EXTRA_COPIES));
  };

  const resetExtraCopies = () => {
    _setExtraCopies(INITIAL_EXTRA_COPIES);
  };

  return {
    extraCopies,
    setExtraCopies,
    resetExtraCopies,
  };
};
