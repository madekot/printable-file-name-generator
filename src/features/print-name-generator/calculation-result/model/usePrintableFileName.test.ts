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

    const { rerender } = renderHook(
      ({ orderName }) => {
        (usePrintJobStore as unknown as jest.Mock).mockReturnValue({
          setPrintableFileName,
          printableFileName: "",
          orderName,
          orderNameVisible: true,
        });

        return usePrintableFileName({ variants, maxCopies });
      },
      { initialProps: { orderName: "Order1" } }
    );

    expect(setPrintableFileName).toHaveBeenCalledWith(
      "Order1 (100 шт. тираж + 150 шт. сверхтираж) 5 копий на печать"
    );

    rerender({ orderName: "Order2" });

    expect(setPrintableFileName).toHaveBeenCalledWith(
      "Order2 (100 шт. тираж + 150 шт. сверхтираж) 5 копий на печать"
    );
  });

  it("должен НЕ обновлять имя файла при изменении если чекбокс поля ВЫКлючен", () => {
    const variants: Variant[] = [{ id: 1, itemsPerSheet: 50, numLabels: 1, totalQuantity: 100 }];
    const maxCopies = 5;

    const { rerender } = renderHook(
      ({ orderName }) => {
        (usePrintJobStore as unknown as jest.Mock).mockReturnValue({
          setPrintableFileName,
          printableFileName: "",
          orderName,
          orderNameVisible: false,
        });

        return usePrintableFileName({ variants, maxCopies });
      },
      { initialProps: { orderName: "Order1" } }
    );

    expect(setPrintableFileName).toHaveBeenCalledWith(
      "(100 шт. тираж + 150 шт. сверхтираж) 5 копий на печать"
    );

    rerender({ orderName: "Order2" });

    expect(setPrintableFileName).toHaveBeenCalledWith(
      "(100 шт. тираж + 150 шт. сверхтираж) 5 копий на печать"
    );
  });
});
