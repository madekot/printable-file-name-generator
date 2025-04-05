import { Variant } from "../model/types";

export const mergeDuplicateLabelVariants = (variants: Variant[]): Variant[] => {
  const groups: Record<string, Variant> = {};

  for (const variant of variants) {
    const key = `${variant.totalQuantity}_${variant.itemsPerSheet}`;

    if (groups[key]) {
      // Проверяем, что все другие свойства совпадают
      for (const prop in variant) {
        if (
          prop !== "numLabels" &&
          prop !== "totalQuantity" &&
          prop !== "itemsPerSheet"
        ) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          if ((groups[key][prop] as unknown) !== variant[prop]) {
            throw new Error(
              `Свойство '${prop}' не соответствует повторяющимся вариантам`
            );
          }
        }
      }

      // Если все свойства совпали, суммируем numLabels
      groups[key].numLabels += variant.numLabels;
    } else {
      groups[key] = { ...variant };
    }
  }

  return Object.values(groups);
};
