import { renderHook } from "@testing-library/react";
import { usePrintableFileName } from "./usePrintableFileName";
import { usePrintJobStore } from "@entities/print-job";
import { Variant } from "../model/types";

jest.mock("@entities/print-job", () => ({
  usePrintJobStore: jest.fn(),
}));

jest.mock("../lib/getFormatMultiVariantWithCopies", () => ({
  getFormatMultiVariantWithCopies: jest
    .fn()
    .mockReturnValue("formatted_variant"),
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

  it("должен обновлять имя файла при изменении orderName", () => {
    const variants: Variant[] = [];
    const maxCopies = 5;

    const { rerender } = renderHook(
      ({ orderName }) => {
        (usePrintJobStore as unknown as jest.Mock).mockReturnValue({
          setPrintableFileName,
          printableFileName: "",
          orderName,
        });

        return usePrintableFileName(variants, maxCopies);
      },
      { initialProps: { orderName: "Order1" } }
    );

    expect(setPrintableFileName).toHaveBeenCalledWith(
      "Order1__formatted_variant"
    );

    rerender({ orderName: "Order2" });

    expect(setPrintableFileName).toHaveBeenCalledWith(
      "Order2__formatted_variant"
    );
  });
});
