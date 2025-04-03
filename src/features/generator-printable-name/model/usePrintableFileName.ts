import { useEffect } from "react";
import { usePrintJobStore } from "@entities/print-job";
import { Variant } from "../model/types";
import { getFormatMultiVariantWithCopies } from "../lib/getFormatMultiVariantWithCopies";

export const usePrintableFileName = (
  variants: Variant[],
  maxCopies: number
) => {
  const { setPrintableFileName, printableFileName, orderName } =
    usePrintJobStore();

  useEffect(() => {
    const orderNameWithSpace = orderName ? `${orderName}__` : "";
    const formatVariantStringWithCopies = getFormatMultiVariantWithCopies(
      variants,
      maxCopies
    );
    setPrintableFileName(
      `${orderNameWithSpace}${formatVariantStringWithCopies}`
    );
  }, [maxCopies, orderName, setPrintableFileName, variants]);

  return printableFileName;
};
