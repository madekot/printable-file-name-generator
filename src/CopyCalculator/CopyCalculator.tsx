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
  const [remainingItems, setRemainingItems] = useState<number>(0);
  const [maxCopies, setMaxCopies] = useState<number>(0);
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);

  const getMaxCopies = () =>
    Math.max(
      ...variants.map((variant) =>
        calculateTotalCopies(
          variant.totalQuantity,
          variant.itemsPerSheet,
          extraCopies
        )
      )
    );

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

  const formatVariantString = (variant: Variant, maxCopies: number) => {
    const remainingItems = Math.floor(
      calculateRemainingItems(
        variant.totalQuantity,
        variant.itemsPerSheet,
        maxCopies
      )
    );

    return `(${variant.numLabels}x${variant.totalQuantity}+${variant.numLabels}x${remainingItems})`;
  };

  const dynamicString =
    variants.length > 1 || variants[0].numLabels > 1
      ? variants
          .map((variant) => formatVariantString(variant, maxCopies))
          .join("_+_") + `_${maxCopies} copies`
      : `(${variants[0].totalQuantity}+${remainingItems})_${maxCopies} copies`;

  useEffect(() => {
    setMaxCopies(getMaxCopies());

    const totalQuantity = variants.reduce(
      (sum, variant) => sum + variant.totalQuantity * variant.numLabels,
      0
    );
    const itemsPerSheet = variants.reduce(
      (sum, variant) => sum + variant.itemsPerSheet * variant.numLabels,
      0
    );

    setTotalItemsCount(totalQuantity);

    setRemainingItems(
      calculateRemainingItems(totalQuantity, itemsPerSheet, maxCopies)
    );
  }, [variants, maxCopies, totalItemsCount, extraCopies]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Генератор имени файла для&nbsp;печати</h1>
        <Logo className={styles.logo} />
      </div>

      <CalculationResult
        totalCopies={maxCopies}
        remainingItems={remainingItems}
        dynamicString={dynamicString}
        onCopy={() => copyToClipboard(dynamicString)}
        addVariant={addVariant}
        totalItemsCount={totalItemsCount}
        itemsAddedCount={0}
        extraCopies={extraCopies}
      />

      <div className={styles.headerBox}>
        <b className={styles.varintsTitle}>Варианты на печатном листе</b>
        <form className={styles.column}>
          <InputField
            label="Приладка:"
            value={extraCopies <= 0 ? undefined : extraCopies}
            placeholder={String(extraCopies)}
            type="number"
            onChange={(e) =>
              setExtraCopies(Math.max(Number(e.target.value), 0))
            }
            min={0}
          />
        </form>
      </div>

      <div className={styles.varintsBox}>
        <div className={styles.varints}>
          {variants.map((variant, index) => (
            <VariantForm
              key={variant.id}
              totalQuantity={variant.totalQuantity}
              itemsPerSheet={variant.itemsPerSheet}
              numLabels={variant.numLabels}
              disabled={variants.length === 1}
              counterVariant={index + 1}
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
    </div>
  );
};

export default CopyCalculator;
