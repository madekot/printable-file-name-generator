import { useMemo } from "react";
import { calculateRemainingItems } from "@features/generator-printable-name/lib/calculateRemainingItems";
import { Variant } from "./types";

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
