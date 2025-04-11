import { calculateRemainingItems } from "./calculateRemainingItems";

interface FormatSingleVariantProps {
  totalQuantity: number;
  itemsPerSheet: number;
  numLabels: number;
  copies: number;
  showOverprint?: boolean;
}

type FormatSingleVariant = (props: FormatSingleVariantProps) => string;

const formatSingleVariant: FormatSingleVariant = ({
  totalQuantity,
  copies,
  numLabels,
  itemsPerSheet,
  showOverprint = true,
}) => {
  const remainingItems = Math.floor(calculateRemainingItems(totalQuantity, itemsPerSheet, copies));
  const hasMultipleLabels = numLabels > 1;
  const noRemainingItems = remainingItems === 0;

  const getPcsTirageText = () => {
    if (!hasMultipleLabels) {
      return `${totalQuantity} шт. тираж`;
    }

    return `${numLabels} вида × ${totalQuantity} шт. тираж`;
  };

  function getOverprintText() {
    if (!hasMultipleLabels || noRemainingItems) {
      return `${remainingItems} шт. сверхтираж`;
    }

    return `${numLabels} вида × ${remainingItems} шт. сверхтираж`;
  }

  return showOverprint ? `${getPcsTirageText()} + ${getOverprintText()}` : getPcsTirageText();
};

export { formatSingleVariant };
