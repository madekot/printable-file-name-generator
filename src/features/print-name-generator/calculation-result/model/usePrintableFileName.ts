import { useEffect } from "react";
import { usePrintJobStore } from "@entities/print-job";
import { Variant } from "@shared/types/variant";
import { formatMultiVariant } from "../lib/formatMultiVariant";

export const usePrintableFileName = (variants: Variant[], maxCopies: number, bonusCopies = 0) => {
  const { setPrintableFileName, printableFileName, orderName } = usePrintJobStore();

  useEffect(() => {
    const orderNameWithSpace = orderName ? `${orderName}` : "";
    const pcsAndPcsBonus = formatMultiVariant(variants, maxCopies);
    const bonusCopiesWithSpace = bonusCopies ? ` (${bonusCopies} из них — сверхтираж)` : "";
    const totalName = `${orderNameWithSpace} ${pcsAndPcsBonus} ${maxCopies} копий на печать${bonusCopiesWithSpace}`;

    setPrintableFileName(totalName);
  }, [bonusCopies, maxCopies, orderName, setPrintableFileName, variants]);

  return printableFileName;
};
