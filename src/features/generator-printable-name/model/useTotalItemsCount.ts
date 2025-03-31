import { useMemo } from "react";
import { Variant } from "./types";

export const useTotalItemsCount = (variants: Variant[]) => {
  const totalItemsCount = useMemo(() => {
    return variants.reduce(
      (sum, variant) => sum + variant.totalQuantity * variant.numLabels,
      0
    );
  }, [variants]);

  return totalItemsCount;
};
