import { Variant } from "@shared/types/variant";

export const mergeDuplicateLabelVariants = (variants: Variant[]): Variant[] => {
  const groups: Record<string, Variant> = {};

  for (const variant of variants) {
    const key = `${variant.totalQuantity}_${variant.itemsPerSheet}`;
    groups[key] = groups[key]
      ? { ...groups[key], numLabels: groups[key].numLabels + variant.numLabels }
      : { ...variant };
  }

  return Object.values(groups);
};
