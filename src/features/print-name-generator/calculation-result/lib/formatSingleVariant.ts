import { calculateRemainingItems } from "./calculateRemainingItems";

interface FormatSingleVariantProps {
  totalQuantity: number;
  itemsPerSheet: number;
  numLabels: number;
  copies: number;
}

type FormatSingleVariant = (props: FormatSingleVariantProps) => string;

const formatSingleVariant: FormatSingleVariant = ({
  totalQuantity,
  copies,
  numLabels,
  itemsPerSheet,
}) => {
  const remainingItems = Math.floor(calculateRemainingItems(totalQuantity, itemsPerSheet, copies));

  const hasSingleLabel = numLabels === 1;
  const hasMultipleLabels = numLabels > 1;
  const hasRemainingItems = remainingItems > 0;
  const noRemainingItems = remainingItems === 0;

  if (hasSingleLabel && hasRemainingItems) {
    return `${totalQuantity} штук тиражных + ${remainingItems} сверхтираж`;
  }

  if (noRemainingItems && hasSingleLabel) {
    return `${totalQuantity} штук тиражных + ${remainingItems} сверхтираж`;
  }

  if (hasSingleLabel) {
    return `${numLabels} вида × ${totalQuantity} штук тиражных × ${remainingItems} сверхтираж`;
  }

  if (noRemainingItems && hasMultipleLabels) {
    return `${numLabels} вида × ${totalQuantity} штук тиражных × ${remainingItems} сверхтираж`;
  }

  return `${numLabels} вида × ${totalQuantity} штук тиражных + ${numLabels} вида × ${remainingItems} сверхтираж`;
};

export { formatSingleVariant };
