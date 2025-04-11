import { useEffect } from "react";
import { usePrintJobStore } from "@entities/print-job";
import { Variant } from "@shared/types/variant";
import { formatMultiVariant } from "../lib/formatMultiVariant";

interface usePrintableFileNameProps {
  variants: Variant[];
  maxCopies: number;
  bonusCopies?: number;
  showOverprint?: boolean;
}

export const usePrintableFileName = ({
  variants,
  maxCopies,
  bonusCopies = 0,
  showOverprint = true,
}: usePrintableFileNameProps) => {
  const { setPrintableFileName, printableFileName, orderName, isOrderNameVisible } =
    usePrintJobStore();

  useEffect(() => {
    const orderNameTotal = isOrderNameVisible ? `${orderName} ` : "";
    const pcsAndPcsBonus = formatMultiVariant(variants, maxCopies, showOverprint);
    const bonusCopiesWithSpace = bonusCopies ? ` (${bonusCopies} из них — сверхтираж)` : "";
    const totalName = `${orderNameTotal}${pcsAndPcsBonus} ${maxCopies} копий на печать${bonusCopiesWithSpace}`;

    setPrintableFileName(totalName);
  }, [
    bonusCopies,
    maxCopies,
    orderName,
    isOrderNameVisible,
    setPrintableFileName,
    showOverprint,
    variants,
  ]);

  return printableFileName;
};
