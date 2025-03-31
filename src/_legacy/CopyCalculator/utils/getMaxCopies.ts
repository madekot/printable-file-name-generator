import { calculateTotalCopies } from "./calculateTotalCopies";

interface Variant {
  id: number;
  totalQuantity: number;
  itemsPerSheet: number;
  numLabels: number;
}

export const getMaxCopies = (variants: Variant[], extraCopies: number) => {
  return Math.max(
    ...variants.map((variant) =>
      calculateTotalCopies(
        variant.totalQuantity,
        variant.itemsPerSheet,
        extraCopies
      )
    )
  );
};
