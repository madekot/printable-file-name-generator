import { calculateTotalCopies } from "./calculateTotalCopies";
import { z } from "zod";

describe("calculateTotalCopies", () => {
  const checkZodError = (fn: Function, message: string) => {
    expect(fn).toThrowError(z.ZodError);
    try {
      fn();
    } catch (e) {
      if (e instanceof z.ZodError) {
        expect(e.errors[0].message).toBe(message);
      }
    }
  };

  test("Должна правильно считать количество копий без дополнительных копий", () => {
    expect(calculateTotalCopies(10, 4)).toBe(3); // 10 / 4 = 2.5 -> округляем вверх -> 3
    expect(calculateTotalCopies(8, 2)).toBe(4); // 8 / 2 = 4
    expect(calculateTotalCopies(7, 3)).toBe(3); // 7 / 3 = 2.33 -> 3
  });

  test("Должна учитывать дополнительные копии", () => {
    expect(calculateTotalCopies(10, 4, 2)).toBe(5); // 3 + 2 = 5
    expect(calculateTotalCopies(8, 2, 1)).toBe(5); // 4 + 1 = 5
  });

  test("Должна корректно обрабатывать граничные случаи", () => {
    expect(calculateTotalCopies(0, 5)).toBe(0); // 0 копий
    expect(calculateTotalCopies(5, 5)).toBe(1); // 5 / 5 = 1
    expect(calculateTotalCopies(1, 5)).toBe(1); // 1 / 5 = 0.2 -> округляем вверх -> 1
  });

  test("Должна выбрасывать ошибку для отрицательных значений", () => {
    checkZodError(
      () => calculateTotalCopies(-10 as any, 4),
      "Все параметры должны быть неотрицательными"
    );
  });

  test("Должна выбрасывать ошибку для отрицательных значений в extraCopies", () => {
    checkZodError(
      () => calculateTotalCopies(10, -4 as any, 2),
      "Все параметры должны быть неотрицательными"
    );
  });

  test("Должна выбрасывать ошибку для отрицательных значений в extraCopies", () => {
    checkZodError(
      () => calculateTotalCopies(10, 4, -2 as any),
      "Все параметры должны быть неотрицательными"
    );
  });

  test("Должна выбрасывать ошибку, если один из параметров не является целым числом", () => {
    checkZodError(
      () => calculateTotalCopies(10.5 as any, 4),
      "Все параметры должны быть целыми числами"
    );
  });
});
