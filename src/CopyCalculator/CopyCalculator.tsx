import React, { useState, useEffect, useMemo } from "react";
import CalculationResult from "../CalculationResult/CalculationResult";
import InputField from "../InputField/InputField";
import VariantForm from "../VariantForm/VariantForm";
import { Logo } from "../Logo/Logo";
import ButtonConfirmable from "../ButtonConfirmable/ButtonConfirmable";
import styles from "./CopyCalculator.module.scss";
import {
  calculateTotalCopies,
  calculateRemainingItems,
  copyToClipboard,
  formatMultiVariant,
} from "./utils";

const INITIAL_VARIANT: Variant = {
  id: Date.now(),
  totalQuantity: 1,
  itemsPerSheet: 1,
  numLabels: 1,
};
const INITIAL_EXTRA_COPIES = 0;

interface Variant {
  id: number;
  totalQuantity: number;
  itemsPerSheet: number;
  numLabels: number;
}

const CopyCalculator: React.FC = () => {
  const [variants, setVariants] = useState<Variant[]>([INITIAL_VARIANT]);
  const [extraCopies, setExtraCopies] = useState<number>(INITIAL_EXTRA_COPIES);
  const [remainingItems, setRemainingItems] = useState<number>(0);
  const [maxCopies, setMaxCopies] = useState<number>(0);
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);

  const formatVariantStringWithCopies = useMemo(() => {
    return `${formatMultiVariant(variants, maxCopies)}_${maxCopies} copies`;
  }, [variants, maxCopies]);

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

  const resetAppState = () => {
    setVariants([INITIAL_VARIANT]);
    setExtraCopies(INITIAL_EXTRA_COPIES);
  };

  useEffect(() => {
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
  }, [variants, maxCopies, extraCopies]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Генератор имени файла для&nbsp;печати</h1>

        <ButtonConfirmable
          onConfirm={resetAppState}
          confirmMessage="Вы уверены, что хотите сбросить настройки приложения?"
          buttonText="Очистить результат"
          variant="red"
          className={styles.btnReset}
        />

        <Logo className={styles.logo} />
      </div>

      <CalculationResult
        totalCopies={maxCopies}
        remainingItems={remainingItems}
        dynamicString={formatVariantStringWithCopies}
        onCopy={() => copyToClipboard(formatVariantStringWithCopies)}
        addVariant={addVariant}
        totalItemsCount={totalItemsCount}
        itemsAddedCount={0}
        extraCopies={extraCopies}
      />

      <div className={styles.headerBox}>
        <form className={styles.column}>
          <InputField
            label="Приладка:"
            value={extraCopies}
            placeholder={String(extraCopies)}
            type="number"
            onChange={(e) =>
              setExtraCopies(Math.max(Number(e.target.value), 0))
            }
            clearOnFocus
            min={0}
            integerOnly
          />
        </form>
      </div>

      <div className={styles.varintsBox}>
        <b className={styles.varintsTitle}>Варианты раскладки на листе</b>
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
