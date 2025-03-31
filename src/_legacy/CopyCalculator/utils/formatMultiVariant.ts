import { formatSingleVariant } from "./formatSingleVariant";

interface Variant {
  id: number;
  totalQuantity: number;
  itemsPerSheet: number;
  numLabels: number;
}

const formatMultiVariant = (variants: Variant[], maxCopies: number) => {
  return variants
    .map((variant) => formatSingleVariant({ ...variant, copies: maxCopies }))
    .join("_+_");
};

export { formatMultiVariant };
