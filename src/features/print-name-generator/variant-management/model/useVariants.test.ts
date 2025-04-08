import { renderHook, act } from "@testing-library/react";
import { Variant } from "@shared/types/variant";

jest.mock("@entities/reset-manager", () => ({
  useObserverReset: jest.fn(),
}));

let useVariants: typeof import("./useVariants").useVariants;

const FIXED_TIMESTAMP = 1234567890;
let dateNowSpy: jest.SpyInstance;

beforeAll(() => {
  // Подменяем Date.now до импорта useVariants
  dateNowSpy = jest.spyOn(Date, "now").mockImplementation(() => FIXED_TIMESTAMP);
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  useVariants = require("./useVariants").useVariants;

  // Проверка: Date.now() действительно замокана
  expect(Date.now()).toBe(FIXED_TIMESTAMP);
});

afterAll(() => {
  dateNowSpy.mockRestore();

  // Проверка: Date.now() восстановлена
  const now = Date.now();
  expect(typeof now).toBe("number");
  expect(now).not.toBe(FIXED_TIMESTAMP);
});

const INITIAL_VARIANT: Variant = {
  id: FIXED_TIMESTAMP,
  totalQuantity: 1,
  itemsPerSheet: 1,
  numLabels: 1,
};

describe("useVariants", () => {
  it("должен инициализироваться с одним вариантом по умолчанию", () => {
    const { result } = renderHook(() => useVariants());

    expect(result.current.variants).toEqual([INITIAL_VARIANT]);
  });

  it("должен добавлять новый вариант", () => {
    const { result } = renderHook(() => useVariants());

    act(() => {
      result.current.addVariant();
    });

    expect(result.current.variants).toHaveLength(2);
    expect(result.current.variants[1]).toMatchObject({
      ...INITIAL_VARIANT,
      id: 1234567890,
    });
  });

  it("должен удалять вариант по id", () => {
    const { result } = renderHook(() => useVariants());

    act(() => {
      result.current.removeVariant(1234567890);
    });

    expect(result.current.variants).toHaveLength(0);
  });

  it("должен обновлять поле варианта по id", () => {
    const { result } = renderHook(() => useVariants());

    act(() => {
      result.current.setVariantField(1234567890, "totalQuantity", 10);
    });

    expect(result.current.variants[0].totalQuantity).toBe(10);
  });

  it("должен сбрасывать варианты до одного", () => {
    const { result } = renderHook(() =>
      useVariants([INITIAL_VARIANT, { ...INITIAL_VARIANT, id: 999 }])
    );

    act(() => {
      result.current.resetVariants();
    });

    expect(result.current.variants).toHaveLength(1);
    expect(result.current.variants[0].id).toBe(1234567890);
  });

  it("должен клонировать вариант по id", () => {
    const { result } = renderHook(() => useVariants());

    act(() => {
      result.current.cloneVariant(1234567890);
    });

    expect(result.current.variants).toHaveLength(2);
    expect(result.current.variants[0].id).toBe(1234567890);
    expect(result.current.variants[1]).toMatchObject({
      ...INITIAL_VARIANT,
      id: 1234567890,
    });
  });

  it("не должен клонировать, если вариант с таким id не найден", () => {
    const { result } = renderHook(() => useVariants());

    act(() => {
      result.current.cloneVariant(999);
    });

    expect(result.current.variants).toHaveLength(1);
  });
});
