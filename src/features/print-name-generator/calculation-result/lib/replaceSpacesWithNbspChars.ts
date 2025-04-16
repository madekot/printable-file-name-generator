/**
 * Заменяет все обычные пробелы на неразрывные (\u00A0)
 * @param text Исходная строка
 * @returns Строка с неразрывными пробелами
 */
export const replaceSpacesWithNbspChars = (text: string): string => {
  return text.replace(/ /g, "\u00A0");
};
