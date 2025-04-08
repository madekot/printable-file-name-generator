import { useMemo } from "react";
import { calculateRemainingItems } from "@features/print-name-generator/calculation-result/lib/calculateRemainingItems";
import { Variant } from "@shared/types/variant";

export const useRemainingItems = (
  totalItemsCount: number,
  maxCopies: number,
  variants: Variant[]
) => {
  const remainingItems = useMemo(() => {
    const itemsPerSheet = variants.reduce(
      (sum, variant) => sum + variant.itemsPerSheet * variant.numLabels,
      0
    );
    return calculateRemainingItems(totalItemsCount, itemsPerSheet, maxCopies);
  }, [maxCopies, totalItemsCount, variants]);

  return remainingItems;
};
