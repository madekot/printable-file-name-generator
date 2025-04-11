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
  const { setPrintableFileName, printableFileName, orderName } = usePrintJobStore();

  useEffect(() => {
    const orderNameWithSpace = orderName ?? "";
    const pcsAndPcsBonus = formatMultiVariant(variants, maxCopies, showOverprint);
    const bonusCopiesWithSpace = bonusCopies ? ` (${bonusCopies} из них — сверхтираж)` : "";
    const totalName = `${orderNameWithSpace} ${pcsAndPcsBonus} ${maxCopies} копий на печать${bonusCopiesWithSpace}`;

    setPrintableFileName(totalName);
  }, [bonusCopies, maxCopies, orderName, setPrintableFileName, showOverprint, variants]);

  return printableFileName;
};
