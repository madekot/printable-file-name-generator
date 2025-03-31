import { Variant } from "../model/types";
import { formatSingleVariant } from "./formatSingleVariant";

const formatMultiVariant = (variants: Variant[], maxCopies: number) => {
  return variants
    .map((variant) => formatSingleVariant({ ...variant, copies: maxCopies }))
    .join("_+_");
};

export { formatMultiVariant };
