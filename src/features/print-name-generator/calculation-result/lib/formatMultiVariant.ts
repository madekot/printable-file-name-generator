import { Variant } from "@shared/types/variant";
import { formatSingleVariant } from "./formatSingleVariant";

const formatMultiVariant = (variants: Variant[], maxCopies: number, showOverprint?: boolean) => {
  return `(${variants
    .map((variant) => formatSingleVariant({ ...variant, copies: maxCopies, showOverprint }))
    .join(" | ")})`;
};

export { formatMultiVariant };
