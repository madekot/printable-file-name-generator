import styles from "./CopyCalculatorContainer.module.scss";
import CalculationResult from "./CalculationResult";
import VariantsList from "./VariantsList";
import InputField from "./InputField";
import Logo from "./Logo";
import ButtonConfirmable from "./ButtonConfirmable";
import LayoutComponent from "./LayoutComponent";
import { useVariants } from "../model/useVariants";
import { useExtraCopies } from "../model/useExtraCopies";
import { useTotalItemsCount } from "../model/useTotalItemsCount";
import { useRemainingItems } from "../model/useRemainingItems";
import { getMaxCopies } from "../lib/getMaxCopies";
import { getFormatMultiVariantWithCopies } from "../lib/getFormatMultiVariantWithCopies";
import { copyToClipboard } from "../lib/copyToClipboard";

const CopyCalculatorContainer = () => {
  const {
    variants,
    setVariantField,
    addVariant,
    removeVariant,
    resetVariants,
  } = useVariants();

  const { setExtraCopies, resetExtraCopies, extraCopies } = useExtraCopies();
  const maxCopies = getMaxCopies(variants, extraCopies);
  const totalItemsCount = useTotalItemsCount(variants);

  const formatVariantStringWithCopies = getFormatMultiVariantWithCopies(
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

export default CopyCalculatorContainer;
