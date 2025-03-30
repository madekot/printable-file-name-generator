import { useState, useEffect, useMemo } from "react";
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
import { useVariants } from "./utils/useVariants";
import { useExtraCopies } from "./utils/useExtraCopies";

const CopyCalculator = () => {
  const {
    variants,
    setVariantField,
    addVariant,
    removeVariant,
    resetVariants,
  } = useVariants();

  const { setExtraCopies, resetExtraCopies, extraCopies } = useExtraCopies();

  const [remainingItems, setRemainingItems] = useState<number>(0);
  const [maxCopies, setMaxCopies] = useState<number>(0);
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);

  const formattedVariants = useMemo(
    () => formatMultiVariant(variants, maxCopies),
    [variants, maxCopies]
  );

  const formatVariantStringWithCopies = `${formattedVariants}_${maxCopies} copies`;

  const resetAppState = () => {
    resetVariants();
    resetExtraCopies();
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
          onChange={(e) => setExtraCopies(Number(e.target.value))}
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
            setVariantField(variant.id, "totalQuantity", value)
          }
          onItemsPerSheetChange={(value) =>
            setVariantField(variant.id, "itemsPerSheet", value)
          }
          onNumLabelsChange={(value) =>
            setVariantField(variant.id, "numLabels", value)
          }
        />
      ))}
    />
  );
};

export default CopyCalculator;
