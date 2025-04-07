import { Variant } from "@shared/types/variant";

export const useTotalItemsCount = (variants: Variant[]) => {
  return variants.reduce((sum, variant) => sum + variant.totalQuantity * variant.numLabels, 0);
};
