import { formatMultiVariant } from "./formatMultiVariant";
import { formatSingleVariant } from "./formatSingleVariant";

jest.mock("./formatSingleVariant", () => ({
  formatSingleVariant: jest.fn(),
}));

describe("formatMultiVariant", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("должна корректно форматировать несколько вариантов, соединяя их через _+_", () => {
    (formatSingleVariant as jest.Mock)
      .mockReturnValueOnce("(50+10)")
      .mockReturnValueOnce("(2x30+5)");

    const variants = [
      { id: 1, totalQuantity: 50, itemsPerSheet: 5, numLabels: 1 },
      { id: 2, totalQuantity: 30, itemsPerSheet: 3, numLabels: 2 },
    ];

    const result = formatMultiVariant(variants, 10);

    expect(result).toBe("((50+10) | (2x30+5))");
    expect(formatSingleVariant).toHaveBeenCalledTimes(2);
    expect(formatSingleVariant).toHaveBeenCalledWith({
      id: 1,
      totalQuantity: 50,
      itemsPerSheet: 5,
      numLabels: 1,
      copies: 10,
    });
    expect(formatSingleVariant).toHaveBeenCalledWith({
      id: 2,
      totalQuantity: 30,
      itemsPerSheet: 3,
      numLabels: 2,
      copies: 10,
    });
  });

  test("должна возвращать пустую строку, если передан пустой массив", () => {
    const result = formatMultiVariant([], 10);
    expect(result).toBe("()");
    expect(formatSingleVariant).not.toHaveBeenCalled();
  });

  test("должна корректно форматировать один вариант без разделителей", () => {
    (formatSingleVariant as jest.Mock).mockReturnValue("(100+20)");

    const variants = [{ id: 3, totalQuantity: 100, itemsPerSheet: 10, numLabels: 1 }];

    const result = formatMultiVariant(variants, 5);

    expect(result).toBe("((100+20))");
    expect(formatSingleVariant).toHaveBeenCalledTimes(1);
    expect(formatSingleVariant).toHaveBeenCalledWith({
      id: 3,
      totalQuantity: 100,
      itemsPerSheet: 10,
      numLabels: 1,
      copies: 5,
    });
  });
});
