import { useMemo } from "react";
import { calculateTotalCopies } from "./calculateTotalCopies";

interface Variant {
  id: number;
  totalQuantity: number;
  itemsPerSheet: number;
  numLabels: number;
}

export const useMaxCopies = (variants: Variant[], extraCopies: number) => {
  return useMemo(() => {
    return Math.max(
      ...variants.map((variant) =>
        calculateTotalCopies(
          variant.totalQuantity,
          variant.itemsPerSheet,
          extraCopies
        )
      )
    );
  }, [variants, extraCopies]);
};
