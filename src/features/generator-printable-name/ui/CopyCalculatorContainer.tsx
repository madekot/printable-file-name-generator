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
import { usePrintableFileName } from "../model/usePrintableFileName";
import { getMaxCopies } from "../lib/getMaxCopies";
import { copyToClipboard } from "../lib/copyToClipboard";
import { usePrintJobStore } from "@entities/print-job";

interface CopyCalculatorContainerProps {
  orderNameSlot: React.ReactNode;
}

const CopyCalculatorContainer = ({
  orderNameSlot,
}: CopyCalculatorContainerProps) => {
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
  const printableFileName = usePrintableFileName(variants, maxCopies);
  const { resetOrderName } = usePrintJobStore();

  const remainingItems = useRemainingItems(
    totalItemsCount,
    maxCopies,
    variants
  );

  const resetAppState = () => {
    resetVariants();
    resetExtraCopies();
    resetOrderName();
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
          dynamicString={printableFileName}
          onCopy={() => copyToClipboard(printableFileName)}
          addVariant={addVariant}
          totalItemsCount={totalItemsCount}
          itemsAddedCount={0}
          extraCopies={extraCopies}
        />
      }
      orderName={orderNameSlot}
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
