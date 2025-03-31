import { Variant } from "../model/types";
import { calculateTotalCopies } from "./calculateTotalCopies";

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
