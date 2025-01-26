import React, { useState, useEffect } from "react";
import CalculationResult from "../CalculationResult/CalculationResult";
import InputField from "../InputField/InputField";
import VariantForm from "../VariantForm/VariantForm";
import { Logo } from "../Logo/Logo";
import styles from "./CopyCalculator.module.scss";
import {
  calculateRemainingItems,
  calculateTotalCopies,
  copyToClipboard,
} from "./utils";

interface Variant {
  id: number;
  totalQuantity: number;
  itemsPerSheet: number;
  numLabels: number;
}

const CopyCalculator: React.FC = () => {
  const [variants, setVariants] = useState<Variant[]>([
    { id: Date.now(), totalQuantity: 1, itemsPerSheet: 1, numLabels: 1 },
  ]);
  const [extraCopies, setExtraCopies] = useState<number>(0);
  const [totalCopies, setTotalCopies] = useState<number>(1);
  const [remainingItems, setRemainingItems] = useState<number>(0);

  const addVariant = () => {
    setVariants((prev) => [
      ...prev,
      {
        id: Date.now(),
        totalQuantity: 1,
        itemsPerSheet: 1,
        numLabels: 1,
      },
    ]);
  };

  const removeVariant = (id: number) => {
    setVariants((prev) => prev.filter((variant) => variant.id !== id));
  };

  const updateVariant = (id: number, key: keyof Variant, value: number) => {
    setVariants((prev) =>
      prev.map((variant) =>
        variant.id === id ? { ...variant, [key]: value } : variant
      )
    );
  };

  const formatVariantString = (variant: Variant, extraCopies: number) => {
    const remainingItems = Math.floor(
      calculateRemainingItems(
        variant.totalQuantity,
        variant.itemsPerSheet / Math.max(variant.numLabels, 1),
        extraCopies
      )
    );

    return `(${variant.numLabels}x${variant.totalQuantity}+${variant.numLabels}x${remainingItems})`;
  };

  const dynamicString =
    variants.length > 1 || variants[0].numLabels > 1
      ? variants
          .map((variant) => formatVariantString(variant, extraCopies))
          .join("_+_") + `_${totalCopies} copies.job`
      : `(${variants[0].totalQuantity}+${remainingItems})_${totalCopies} copies.job`;

  useEffect(() => {
    const totalQuantity = variants.reduce(
      (sum, variant) => sum + variant.totalQuantity * variant.numLabels,
      0
    );
    const itemsPerSheet = variants.reduce(
      (sum, variant) => sum + variant.itemsPerSheet,
      0
    );

    setTotalCopies(
      calculateTotalCopies(totalQuantity, itemsPerSheet, extraCopies)
    );
    setRemainingItems(
      calculateRemainingItems(totalQuantity, itemsPerSheet, extraCopies)
    );
  }, [variants, extraCopies]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Генератор имени файла для&nbsp;печати</h1>

      <CalculationResult
        totalCopies={totalCopies}
        remainingItems={remainingItems}
        dynamicString={dynamicString}
        onCopy={() => copyToClipboard(dynamicString)}
        addVariant={addVariant}
      />

      <div className={styles.varintsBox}>
        <div className={styles.headerBox}>
          <b className={styles.varintsTitle}>Печатный лист</b>
          <form className={styles.column}>
            <InputField
              label="Приладка:"
              value={extraCopies}
              onChange={(e) =>
                setExtraCopies(Math.max(Number(e.target.value), 0))
              }
              min={0}
            />
          </form>
        </div>
        <div className={styles.varints}>
          {[...variants].reverse().map((variant, index) => (
            <VariantForm
              key={variant.id}
              totalQuantity={variant.totalQuantity}
              itemsPerSheet={variant.itemsPerSheet}
              numLabels={variant.numLabels}
              disabled={index === 0}
              counterVariant={variants.length - index}
              onDelete={() => removeVariant(variant.id)}
              onTotalQuantityChange={(value) =>
                updateVariant(variant.id, "totalQuantity", value)
              }
              onItemsPerSheetChange={(value) =>
                updateVariant(variant.id, "itemsPerSheet", value)
              }
              onNumLabelsChange={(value) =>
                updateVariant(variant.id, "numLabels", value)
              }
            />
          ))}
        </div>
      </div>

      <Logo className={styles.logo} />
    </div>
  );
};

export default CopyCalculator;
