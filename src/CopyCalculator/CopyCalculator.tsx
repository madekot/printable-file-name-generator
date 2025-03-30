import { useMemo } from "react";
import CalculationResult from "../CalculationResult/CalculationResult";
import InputField from "../InputField/InputField";
import { Logo } from "../Logo/Logo";
import ButtonConfirmable from "../ButtonConfirmable/ButtonConfirmable";
import styles from "./CopyCalculator.module.scss";
import { copyToClipboard, formatMultiVariant } from "./utils";
import { LayoutComponent } from "./LayoutComponent";
import VariantForm from "../VariantForm/VariantForm";
import { useVariants } from "./utils/useVariants";
import { useExtraCopies } from "./utils/useExtraCopies";
import { useMaxCopies } from "./utils/useMaxCopies";
import { useTotalItemsCount } from "./utils/useTotalItemsCount";
import { useRemainingItems } from "./utils/useRemainingItems";

const CopyCalculator = () => {
  const {
    variants,
    setVariantField,
    addVariant,
    removeVariant,
    resetVariants,
  } = useVariants();

  const { setExtraCopies, resetExtraCopies, extraCopies } = useExtraCopies();
  const maxCopies = useMaxCopies(variants, extraCopies);
  const totalItemsCount = useTotalItemsCount(variants);

  const remainingItems = useRemainingItems(
    totalItemsCount,
    maxCopies,
    variants
  );

  const formattedVariants = useMemo(
    () => formatMultiVariant(variants, maxCopies),
    [variants, maxCopies]
  );

  const formatVariantStringWithCopies = `${formattedVariants}_${maxCopies} copies`;

  const resetAppState = () => {
    resetVariants();
    resetExtraCopies();
  };

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
