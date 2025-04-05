import { renderHook } from "@testing-library/react";
import { useRemainingItems } from "./useRemainingItems";
import * as lib from "@features/generator-printable-name/lib/calculateRemainingItems";
import { Variant } from "./types";

jest.mock("@features/generator-printable-name/lib/calculateRemainingItems");

const mockedCalculateRemainingItems = jest.mocked(lib.calculateRemainingItems);

describe("useRemainingItems", () => {
  beforeEach(() => {
    mockedCalculateRemainingItems.mockClear();
  });

  it("корректно считает оставшиеся элементы", () => {
    mockedCalculateRemainingItems.mockReturnValue(5);

    const variants: Variant[] = [
      { totalQuantity: 100, itemsPerSheet: 2, numLabels: 3 },
      { totalQuantity: 100, itemsPerSheet: 4, numLabels: 1 },
    ] as Variant[];

    const { result } = renderHook(() => useRemainingItems(100, 5, variants));

    expect(result.current).toBe(5);
    expect(mockedCalculateRemainingItems).toHaveBeenCalledWith(100, 10, 5);
  });

  it("корректно обрабатывает пустой массив вариантов", () => {
    mockedCalculateRemainingItems.mockReturnValue(100);

    const { result } = renderHook(() => useRemainingItems(100, 5, []));

    expect(result.current).toBe(100);
    expect(mockedCalculateRemainingItems).toHaveBeenCalledWith(100, 0, 5);
  });

  it("пересчитывает результат при изменении зависимостей", () => {
    mockedCalculateRemainingItems.mockReturnValue(10);

    const variants: Variant[] = [
      { totalQuantity: 50, itemsPerSheet: 5, numLabels: 1 },
    ] as Variant[];

    const { result, rerender } = renderHook(
      ({ totalItemsCount, maxCopies, variants }) =>
        useRemainingItems(totalItemsCount, maxCopies, variants),
      {
        initialProps: {
          totalItemsCount: 100,
          maxCopies: 3,
          variants,
        },
      }
    );

    expect(result.current).toBe(10);

    mockedCalculateRemainingItems.mockReturnValue(20);

    rerender({
      totalItemsCount: 120,
      maxCopies: 4,
      variants,
    });

    expect(result.current).toBe(20);
    expect(mockedCalculateRemainingItems).toHaveBeenCalledWith(120, 5, 4);
  });
});
