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

    expect(result).toBe("50 штук тиражных + 0 сверхтираж");
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

    expect(result).toBe("30 штук тиражных + 10 сверхтираж");
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

    expect(result).toBe("2 вида × 50 штук тиражных × 0 сверхтираж");
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

    expect(result).toBe("3 вида × 40 штук тиражных + 3 вида × 20 сверхтираж");
    expect(calculateRemainingItems).toHaveBeenCalledWith(40, 5, 12);
  });
});
