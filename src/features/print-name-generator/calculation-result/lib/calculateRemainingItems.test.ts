import { calculateRemainingItems } from "./calculateRemainingItems";

describe("calculateRemainingItems", () => {
  // Тест на корректные данные
  it("должен правильно вычислять остаток, когда все параметры корректные", () => {
    const result = calculateRemainingItems(10, 5, 3);
    expect(result).toBe(5); // (3 * 5) - 10 = 5
  });

  // Тест на случай, когда результат отрицательный
  it("должен возвращать 0, если результат отрицательный", () => {
    const result = calculateRemainingItems(20, 5, 3);
    expect(result).toBe(0); // (3 * 5) - 20 = -5, но результат должен быть 0
  });

  // Тест на отрицательные значения
  it("должен выбрасывать ошибку, если передан отрицательный параметр", () => {
    expect(() => calculateRemainingItems(-10, 5, 3)).toThrowError(
      "Все параметры должны быть неотрицательными"
    );
    expect(() => calculateRemainingItems(10, -5, 3)).toThrowError(
      "Все параметры должны быть неотрицательными"
    );
    expect(() => calculateRemainingItems(10, 5, -3)).toThrowError(
      "Все параметры должны быть неотрицательными"
    );
  });

  // Тест на дробные значения
  it("должен выбрасывать ошибку, если передано дробное число", () => {
    expect(() => calculateRemainingItems(10, 5.5, 3)).toThrowError(
      "Все параметры должны быть целыми числами"
    );
    expect(() => calculateRemainingItems(10, 5, 2.5)).toThrowError(
      "Все параметры должны быть целыми числами"
    );
  });
});
