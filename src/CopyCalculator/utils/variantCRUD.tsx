interface Variant {
  id: number;
  totalQuantity: number;
  itemsPerSheet: number;
  numLabels: number;
}

export const addVariant = (variants: Variant[]) => [
  ...variants,
  {
    id: Date.now(),
    totalQuantity: 1,
    itemsPerSheet: 1,
    numLabels: 1,
  },
];

export const removeVariant = (variants: Variant[], id: number) =>
  variants.filter((variant) => variant.id !== id);

export const updateVariant = (
  variants: Variant[],
  id: number,
  key: keyof Variant,
  value: number
) =>
  variants.map((variant) =>
    variant.id === id ? { ...variant, [key]: value } : variant
  );
