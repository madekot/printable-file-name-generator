import { Variant } from "../model/types";
import { formatMultiVariant } from "./formatMultiVariant";

export const getFormatMultiVariantWithCopies = (
  variants: Variant[],
  maxCopies: number
) => `${formatMultiVariant(variants, maxCopies)}_${maxCopies} copies`;
