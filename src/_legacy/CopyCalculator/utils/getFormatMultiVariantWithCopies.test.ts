import { getFormatMultiVariantWithCopies } from "./getFormatMultiVariantWithCopies";

interface Variant {
  id: number;
  totalQuantity: number;
  itemsPerSheet: number;
  numLabels: number;
}

describe("getFormatMultiVariantWithCopies", () => {
  const mockVariant = (id: number): Variant => ({
    id,
    totalQuantity: 0,
    itemsPerSheet: 0,
    numLabels: 0,
  });

  test('должна добавлять "_X copies" к результату formatMultiVariant', () => {
    const variants = [mockVariant(1)];
    const result = getFormatMultiVariantWithCopies(variants, 5);

    expect(result).toMatch(/_5 copies$/);
  });

  test("должна корректно работать с 0 копий", () => {
    const variants = [mockVariant(1)];
    const result = getFormatMultiVariantWithCopies(variants, 0);

    expect(result).toMatch(/_0 copies$/);
  });

  test("должна передавать variants и maxCopies во внутреннюю функцию", () => {
    const variants = [mockVariant(1), mockVariant(2)];
    const maxCopies = 3;

    const originalFormatMultiVariant = jest.requireActual(
      "./formatMultiVariant"
    ).formatMultiVariant;

    jest.mock("./formatMultiVariant", () => ({
      formatMultiVariant: jest.fn((v, c) => {
        expect(v).toEqual(variants);
        expect(c).toBe(maxCopies);
        return originalFormatMultiVariant(v, c);
      }),
    }));

    getFormatMultiVariantWithCopies(variants, maxCopies);

    jest.unmock("./formatMultiVariant");
  });
});
