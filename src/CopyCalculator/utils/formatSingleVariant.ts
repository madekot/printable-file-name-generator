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
  const remainingItems = Math.floor(
    calculateRemainingItems(totalQuantity, itemsPerSheet, copies)
  );

  const hasSingleLabel = numLabels === 1;
  const hasMultipleLabels = numLabels > 1;
  const hasRemainingItems = remainingItems > 0;
  const noRemainingItems = remainingItems === 0;

  if (hasSingleLabel && hasRemainingItems) {
    return `(${totalQuantity}+${remainingItems})`;
  }

  if (noRemainingItems && hasSingleLabel) {
    return `(${totalQuantity}+${remainingItems})`;
  }

  if (hasSingleLabel) {
    return `(${numLabels}x${totalQuantity}+${remainingItems})`;
  }

  if (noRemainingItems && hasMultipleLabels) {
    return `(${numLabels}x${totalQuantity}+${remainingItems})`;
  }

  return `(${numLabels}x${totalQuantity}+${numLabels}x${remainingItems})`;
};

export { formatSingleVariant };
