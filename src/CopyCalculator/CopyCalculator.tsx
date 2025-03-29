import { useState, useEffect, useMemo, useCallback } from "react";
import CalculationResult from "../CalculationResult/CalculationResult";
import InputField from "../InputField/InputField";
import { Logo } from "../Logo/Logo";
import ButtonConfirmable from "../ButtonConfirmable/ButtonConfirmable";
import styles from "./CopyCalculator.module.scss";
import {
  calculateTotalCopies,
  calculateRemainingItems,
  copyToClipboard,
  formatMultiVariant,
} from "./utils";
import { LayoutComponent } from "./LayoutComponent";
import VariantForm from "../VariantForm/VariantForm";

/**
 * Начальные значения для нового варианта печати.
 * @property {number} id - Уникальный идентификатор (timestamp).
 * @property {number} totalQuantity - Общее количество копий.
 * @property {number} itemsPerSheet - Количество одинаковых варианта на спуске.
 * @property {number} numLabels - Количество одинаковы видов на спуске.
 */
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

  const formattedVariants = useMemo(
    () => formatMultiVariant(variants, maxCopies),
    [variants, maxCopies]
  );
  const formatVariantStringWithCopies = `${formattedVariants}_${maxCopies} copies`;

  const addVariant = useCallback(() => {
    setVariants((prev) => [
      ...prev,
      {
        id: Date.now(),
        totalQuantity: 1,
        itemsPerSheet: 1,
        numLabels: 1,
      },
    ]);
  }, []);

  const removeVariant = useCallback((id: number) => {
    setVariants((prev) => prev.filter((variant) => variant.id !== id));
  }, []);

  const updateVariant = useCallback(
    (id: number, key: keyof Variant, value: number) => {
      setVariants((prev) =>
        prev.map((variant) =>
          variant.id === id ? { ...variant, [key]: value } : variant
        )
      );
    },
    []
  );

  const resetAppState = () => {
    setVariants([INITIAL_VARIANT]);
    setExtraCopies(INITIAL_EXTRA_COPIES);
    setTotalItemsCount(0);
    setRemainingItems(0);
  };

  useEffect(() => {
    const getMaxCopies = () => {
      return Math.max(
        ...variants.map((variant) =>
          calculateTotalCopies(
            variant.totalQuantity,
            variant.itemsPerSheet,
            extraCopies
          )
        )
      );
    };

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
    <LayoutComponent
      title="Генератор имени файла для печати"
      resetButton={
        <ButtonConfirmable
          onConfirm={resetAppState}
          confirmMessage="Вы уверены, что хотите сбросить настройки приложения?"
          buttonText="Очистить результат"
          variant="red"
          className={styles.btnReset}
        />
      }
      logo={<Logo className={styles.logo} />}
      calculationResult={
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
      }
      extraCopiesInput={
        <InputField
          label="Приладка:"
          value={extraCopies}
          placeholder={String(extraCopies)}
          type="number"
          onChange={(e) =>
            setExtraCopies(Math.max(parseInt(e.target.value, 10) || 0, 0))
          }
          min={0}
        />
      }
      variantsTitle="Варианты раскладки на листе"
      variantsList={variants.map((variant, index) => (
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
    />
  );
};

export default CopyCalculator;
