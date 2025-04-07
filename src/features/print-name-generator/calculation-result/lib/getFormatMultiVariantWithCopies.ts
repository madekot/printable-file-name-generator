import { Variant } from "@shared/types/variant";
import { formatMultiVariant } from "./formatMultiVariant";

export const getFormatMultiVariantWithCopies = (variants: Variant[], maxCopies: number) =>
  `${formatMultiVariant(variants, maxCopies)}_${maxCopies} copies`;
