import { z } from "zod";

const positiveIntegerSchema = () =>
  z
    .number()
    .int("Все параметры должны быть целыми числами")
    .refine((value) => value >= 0, "Все параметры должны быть неотрицательными");

const calculateRemainingItems = (
  totalQuantity: number,
  itemsPerSheet: number,
  copies: number
): number => {
  positiveIntegerSchema().parse(totalQuantity);
  positiveIntegerSchema().parse(itemsPerSheet);
  positiveIntegerSchema().parse(copies);

  return Math.max(copies * itemsPerSheet - totalQuantity, 0);
};

export { calculateRemainingItems };
