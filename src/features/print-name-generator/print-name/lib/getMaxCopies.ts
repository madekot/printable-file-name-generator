import { Variant } from "@shared/types/variant";
import { calculateTotalCopies } from "./calculateTotalCopies";

export const getMaxCopies = (variants: Variant[], extraCopies: number) => {
  return Math.max(
    ...variants.map((variant) =>
      calculateTotalCopies(variant.totalQuantity, variant.itemsPerSheet, extraCopies)
    ),
    0
  );
};
