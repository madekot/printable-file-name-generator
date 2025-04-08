import { mergeDuplicateLabelVariants } from "./mergeDuplicateLabelVariants";
import { Variant } from "@shared/types/variant";

describe("mergeDuplicateLabelVariants", () => {
  it("объединяет варианты с одинаковыми totalQuantity и itemsPerSheet", () => {
    const input: Variant[] = [
      { totalQuantity: 100, itemsPerSheet: 10, numLabels: 2 } as Variant,
      { totalQuantity: 100, itemsPerSheet: 10, numLabels: 3 } as Variant,
      { totalQuantity: 200, itemsPerSheet: 20, numLabels: 1 } as Variant,
    ];

    const result = mergeDuplicateLabelVariants(input);

    expect(result).toHaveLength(2);

    const merged = result.find((v) => v.totalQuantity === 100 && v.itemsPerSheet === 10);
    expect(merged?.numLabels).toBe(5);

    const untouched = result.find((v) => v.totalQuantity === 200 && v.itemsPerSheet === 20);
    expect(untouched?.numLabels).toBe(1);
  });

  it("возвращает пустой массив, если входной массив пуст", () => {
    const result = mergeDuplicateLabelVariants([]);
    expect(result).toEqual([]);
  });

  it("не объединяет варианты с разными totalQuantity или itemsPerSheet", () => {
    const input: Variant[] = [
      { totalQuantity: 100, itemsPerSheet: 10, numLabels: 1 } as Variant,
      { totalQuantity: 100, itemsPerSheet: 15, numLabels: 1 } as Variant,
      { totalQuantity: 150, itemsPerSheet: 10, numLabels: 1 } as Variant,
    ];

    const result = mergeDuplicateLabelVariants(input);
    expect(result).toHaveLength(3);
  });

  it("оставляет все другие свойства от первого встретившегося варианта", () => {
    const input: Variant[] = [
      {
        totalQuantity: 100,
        itemsPerSheet: 10,
        numLabels: 1,
        comment: "first",
      } as unknown as Variant,
      {
        totalQuantity: 100,
        itemsPerSheet: 10,
        numLabels: 2,
        comment: "first",
      } as unknown as Variant,
    ];

    const result = mergeDuplicateLabelVariants(input);
    expect(result).toHaveLength(1);
    expect(result[0].numLabels).toBe(3);

    if ("comment" in result[0]) {
      expect(result[0].comment).toBe("first");
    }
  });
});
