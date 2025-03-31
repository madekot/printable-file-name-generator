import { formatSingleVariant } from "./formatSingleVariant";
import { calculateRemainingItems } from "./calculateRemainingItems";

jest.mock("./calculateRemainingItems", () => ({
  calculateRemainingItems: jest.fn(),
}));

describe("formatSingleVariant", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("должна вернуть строку в формате (totalQuantity + 0), если remainingItems === 0 и numLabels === 1", () => {
    (calculateRemainingItems as jest.Mock).mockReturnValue(0);

    const variant = {
      totalQuantity: 50,
      itemsPerSheet: 5,
      numLabels: 1,
      copies: 10,
    };
    const result = formatSingleVariant(variant);

    expect(result).toBe("(50+0)");
    expect(calculateRemainingItems).toHaveBeenCalledWith(50, 5, 10);
  });

  test("должна вернуть строку в формате (totalQuantity + remainingItems), remainingItems > 0 и numLabels === 1", () => {
    (calculateRemainingItems as jest.Mock).mockReturnValue(10);

    const variant = {
      totalQuantity: 30,
      itemsPerSheet: 5,
      numLabels: 1,
      copies: 8,
    };
    const result = formatSingleVariant(variant);

    expect(result).toBe("(30+10)");
    expect(calculateRemainingItems).toHaveBeenCalledWith(30, 5, 8);
  });

  test("должна вернуть строку в формате (totalQuantity x remainingItems + 0), если remainingItems === 0 и numLabels >= 2", () => {
    (calculateRemainingItems as jest.Mock).mockReturnValue(0);

    const variant = {
      totalQuantity: 50,
      itemsPerSheet: 5,
      numLabels: 2,
      copies: 10,
    };
    const result = formatSingleVariant(variant);

    expect(result).toBe("(2x50+0)");
    expect(calculateRemainingItems).toHaveBeenCalledWith(50, 5, 10);
  });

  test("должна вернуть строку в формате (numLabels x totalQuantity + numLabels x remainingItems), если remainingItems === 0 и numLabels >= 2 и экстра копии > 0", () => {
    (calculateRemainingItems as jest.Mock).mockReturnValue(20);

    const variant = {
      totalQuantity: 40,
      itemsPerSheet: 5,
      numLabels: 3,
      copies: 12,
    };
    const result = formatSingleVariant(variant);

    expect(result).toBe("(3x40+3x20)");
    expect(calculateRemainingItems).toHaveBeenCalledWith(40, 5, 12);
  });
});
