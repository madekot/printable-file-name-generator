import { useEffect, useState } from "react";
import { usePrintJobStore } from "@entities/print-job";
import { Variant } from "@shared/types/variant";
import { formatMultiVariant } from "../lib/formatMultiVariant";

/**
 * Заменяет все обычные пробелы на неразрывные (\u00A0)
 * @param text Исходная строка
 * @returns Строка с неразрывными пробелами
 */
const replaceSpacesWithNbspChars = (text: string): string => {
  return text.replace(/ /g, "\u00A0");
};

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
  const [printableFileName, setPrintableFileName] = useState<string>("");
  const { orderName, isOrderNameVisible } = usePrintJobStore();

  useEffect(() => {
    const orderNameTotal = isOrderNameVisible ? `${orderName} ` : "";
    const pcsAndPcsBonus = formatMultiVariant(variants, maxCopies, showOverprint);
    const bonusCopiesWithSpace = bonusCopies ? ` (${bonusCopies} из них — сверхтираж)` : "";
    setPrintableFileName(
      `${orderNameTotal}${replaceSpacesWithNbspChars(pcsAndPcsBonus)} ${replaceSpacesWithNbspChars(`${maxCopies} копий на печать${bonusCopiesWithSpace}`)}`
    );
  }, [bonusCopies, maxCopies, orderName, isOrderNameVisible, showOverprint, variants]);

  return printableFileName;
};
