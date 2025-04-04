import { renderHook, act } from "@testing-library/react";
import usePrintJobStore from "./store.print-job";

describe("usePrintJobStore", () => {
  it("должен устанавливать printableFileName", () => {
    const { result } = renderHook(() => usePrintJobStore());

    act(() => {
      result.current.setPrintableFileName("(100+20)_4 copies");
    });

    expect(result.current.printableFileName).toBe("(100+20)_4 copies");
  });

  it("должен устанавливать orderName", () => {
    const { result } = renderHook(() => usePrintJobStore());

    act(() => {
      result.current.setOrderName("order-name__(100+20)_4 copies");
    });

    expect(result.current.orderName).toBe("order-name__(100+20)_4 copies");
  });

  it("должен сбрасывать orderName", () => {
    const { result } = renderHook(() => usePrintJobStore());

    act(() => {
      result.current.setOrderName("order-name__(100+20)_4 copies");
    });

    act(() => {
      result.current.resetOrderName();
    });

    expect(result.current.orderName).toBe("");
  });
});
