import { useMemo } from "react";
import { formatMultiVariant } from "./formatMultiVariant";

interface Variant {
  id: number;
  totalQuantity: number;
  itemsPerSheet: number;
  numLabels: number;
}

export const useFormattedVariantString = (
  variants: Variant[],
  maxCopies: number
) => {
  return useMemo(() => {
    const formatted = formatMultiVariant(variants, maxCopies);
    return `${formatted}_${maxCopies} copies`;
  }, [variants, maxCopies]);
};
