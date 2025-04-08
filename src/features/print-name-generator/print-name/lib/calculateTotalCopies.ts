import { z } from "zod";

// Схема для проверки положительных целых чисел
const positiveIntegerSchema = () =>
  z
    .number()
    .int("Все параметры должны быть целыми числами")
    .refine((value) => value >= 0, "Все параметры должны быть неотрицательными");

type NonNegativeInteger<T extends number> = T extends number
  ? `${T}` extends `-${string}` | `${string}.${string}`
    ? never
    : T
  : never;

// Функция для расчета общего числа копий
function calculateTotalCopies<N extends number>(
  total: NonNegativeInteger<N>,
  perCopy: NonNegativeInteger<N>,
  extraCopies?: NonNegativeInteger<N>
) {
  positiveIntegerSchema().parse(total);
  positiveIntegerSchema().parse(perCopy);

  if (extraCopies !== undefined) {
    positiveIntegerSchema().parse(extraCopies);
  }

  return Math.ceil(total / perCopy) + (extraCopies || 0);
}

export { calculateTotalCopies };
