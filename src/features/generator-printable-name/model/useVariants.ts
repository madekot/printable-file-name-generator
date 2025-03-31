import { useState } from "react";
import { Variant } from "./types";

/**
 * Начальные значения для нового варианта спуска.
 * @property {number} id - Уникальный идентификатор (timestamp).
 * @property {number} totalQuantity - Общее количество копий.
 * @property {number} itemsPerSheet - Количество одинаковых варианта на спуске.
 * @property {number} numLabels - Количество одинаковы видов на спуске.
 */
const INITIAL_VARIANT: Variant = {
  id: Date.now(),
  totalQuantity: 1,
  itemsPerSheet: 1,
  numLabels: 1,
};

export function useVariants(initialVariants: Variant[] = [INITIAL_VARIANT]) {
  const [variants, setVariants] = useState<Variant[]>(initialVariants);

  const addVariant = () =>
    setVariants((prev) => [...prev, { ...INITIAL_VARIANT, id: Date.now() }]);

  const removeVariant = (id: number) =>
    setVariants((prev) => prev.filter((v) => v.id !== id));

  const setVariantField = (id: number, field: keyof Variant, value: number) =>
    setVariants((prev) =>
      prev.map((v) => (v.id === id ? { ...v, [field]: value } : v))
    );

  const resetVariants = () =>
    setVariants([{ ...INITIAL_VARIANT, id: Date.now() }]);

  return {
    variants,
    addVariant,
    removeVariant,
    resetVariants,
    setVariantField,
  };
}
