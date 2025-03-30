import { formatMultiVariant } from "./formatMultiVariant";

interface Variant {
  id: number;
  totalQuantity: number;
  itemsPerSheet: number;
  numLabels: number;
}

export const getFormatMultiVariantWithCopies = (
  variants: Variant[],
  maxCopies: number
) => `${formatMultiVariant(variants, maxCopies)}_${maxCopies} copies`;
