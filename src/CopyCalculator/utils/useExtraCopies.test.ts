import { renderHook, act } from "@testing-library/react";
import { useExtraCopies } from "./useExtraCopies";

describe("useExtraCopies", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("должен инициализироваться со значением 0 по умолчанию", () => {
    const { result } = renderHook(() => useExtraCopies());
    expect(result.current.extraCopies).toBe(0);
  });

  test("должен инициализироваться с переданным начальным значением", () => {
    const { result } = renderHook(() => useExtraCopies(5));
    expect(result.current.extraCopies).toBe(5);
  });

  test("не должен допускать отрицательные значения при инициализации", () => {
    const { result } = renderHook(() => useExtraCopies(-3));
    expect(result.current.extraCopies).toBe(0);
  });

  describe("setExtraCopies", () => {
    test("должен корректно обновлять значение", () => {
      const { result } = renderHook(() => useExtraCopies());

      act(() => {
        result.current.setExtraCopies(4);
      });

      expect(result.current.extraCopies).toBe(4);
    });

    test("не должен допускать отрицательные значения", () => {
      const { result } = renderHook(() => useExtraCopies(2));

      act(() => {
        result.current.setExtraCopies(-5);
      });

      expect(result.current.extraCopies).toBe(0);
    });

    test("должен разрешать нулевое значение", () => {
      const { result } = renderHook(() => useExtraCopies(3));

      act(() => {
        result.current.setExtraCopies(0);
      });

      expect(result.current.extraCopies).toBe(0);
    });
  });

  describe("resetExtraCopies", () => {
    test("должен сбрасывать значение к 0", () => {
      const { result } = renderHook(() => useExtraCopies(5));

      act(() => {
        result.current.setExtraCopies(10);
      });
      expect(result.current.extraCopies).toBe(10);

      act(() => {
        result.current.resetExtraCopies();
      });

      expect(result.current.extraCopies).toBe(0);
    });

    test("должен сбрасывать к 0, даже если начальное значение было другим", () => {
      const { result } = renderHook(() => useExtraCopies(7));

      act(() => {
        result.current.resetExtraCopies();
      });

      expect(result.current.extraCopies).toBe(0);
    });
  });
});
