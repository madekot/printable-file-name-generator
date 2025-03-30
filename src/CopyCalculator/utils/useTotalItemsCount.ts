import { useMemo } from "react";

interface Variant {
  id: number;
  totalQuantity: number;
  itemsPerSheet: number;
  numLabels: number;
}

export const useTotalItemsCount = (variants: Variant[]) => {
  const totalItemsCount = useMemo(() => {
    return variants.reduce(
      (sum, variant) => sum + variant.totalQuantity * variant.numLabels,
      0
    );
  }, [variants]);

  return totalItemsCount;
};
