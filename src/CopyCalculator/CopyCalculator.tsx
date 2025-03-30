import CalculationResult from "../CalculationResult/CalculationResult";
import InputField from "../InputField/InputField";
import { Logo } from "../Logo/Logo";
import ButtonConfirmable from "../ButtonConfirmable/ButtonConfirmable";
import styles from "./CopyCalculator.module.scss";
import { copyToClipboard } from "./utils";
import { LayoutComponent } from "./LayoutComponent";
import { useVariants } from "./utils/useVariants";
import { useExtraCopies } from "./utils/useExtraCopies";
import { useMaxCopies } from "./utils/useMaxCopies";
import { useTotalItemsCount } from "./utils/useTotalItemsCount";
import { useRemainingItems } from "./utils/useRemainingItems";
import { useFormattedVariantString } from "./utils/useFormattedVariants";
import { VariantsList } from "./utils/VariantsList";

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

  const formatVariantStringWithCopies = useFormattedVariantString(
    variants,
    maxCopies
  );

  const remainingItems = useRemainingItems(
    totalItemsCount,
    maxCopies,
    variants
  );

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
      variantsList={
        <VariantsList
          variants={variants}
          setVariantField={setVariantField}
          removeVariant={removeVariant}
        />
      }
    />
  );
};

export default CopyCalculator;
