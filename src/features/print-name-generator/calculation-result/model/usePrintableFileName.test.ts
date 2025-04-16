import { renderHook } from "@testing-library/react";
import { usePrintableFileName } from "./usePrintableFileName";
import { usePrintJobStore } from "@entities/print-job";
import { Variant } from "@shared/types/variant";

jest.mock("@entities/print-job", () => ({
  usePrintJobStore: jest.fn(),
}));

jest.mock("../lib/getFormatMultiVariantWithCopies", () => ({
  getFormatMultiVariantWithCopies: jest.fn().mockReturnValue("formatted_variant"),
}));

describe("usePrintableFileName", () => {
  let setPrintableFileName: jest.Mock;

  beforeEach(() => {
    setPrintableFileName = jest.fn();
    (usePrintJobStore as unknown as jest.Mock).mockReturnValue({
      setPrintableFileName,
      printableFileName: "",
      orderName: "TestOrder",
    });
  });

  it("должен обновлять имя файла при изменении если чекбокс поля включен", () => {
    const variants: Variant[] = [{ id: 1, itemsPerSheet: 50, numLabels: 1, totalQuantity: 100 }];
    const maxCopies = 5;

    (usePrintJobStore as unknown as jest.Mock).mockReturnValue({
      orderName: "Order1",
      isOrderNameVisible: true,
    });

    const { result, rerender } = renderHook(
      ({ orderName }) => {
        (usePrintJobStore as unknown as jest.Mock).mockReturnValue({
          orderName,
          isOrderNameVisible: true,
        });

        return usePrintableFileName({ variants, maxCopies });
      },
      { initialProps: { orderName: "Order1" } }
    );

    expect(result.current).toBe(
      "Order1 (100\u00A0шт.\u00A0тираж\u00A0+\u00A0150\u00A0шт.\u00A0сверхтираж) 5\u00A0копий\u00A0на\u00A0печать"
    );

    rerender({ orderName: "Order2" });

    expect(result.current).toBe(
      "Order2 (100\u00A0шт.\u00A0тираж\u00A0+\u00A0150\u00A0шт.\u00A0сверхтираж) 5\u00A0копий\u00A0на\u00A0печать"
    );
  });

  it("должен НЕ обновлять имя файла при изменении если чекбокс поля ВЫКлючен", () => {
    const variants: Variant[] = [{ id: 1, itemsPerSheet: 50, numLabels: 1, totalQuantity: 100 }];
    const maxCopies = 5;

    const { result } = renderHook(
      ({ orderName }) => {
        (usePrintJobStore as unknown as jest.Mock).mockReturnValue({
          orderName,
          isOrderNameVisible: false,
        });

        return usePrintableFileName({ variants, maxCopies });
      },
      { initialProps: { orderName: "Order1" } }
    );

    expect(result.current).toBe(
      "(100\u00A0шт.\u00A0тираж\u00A0+\u00A0150\u00A0шт.\u00A0сверхтираж) 5\u00A0копий\u00A0на\u00A0печать"
    );
  });
});
