import styles from "./CopyCalculatorContainer.module.scss";
import CalculationResult from "./CalculationResult";
import VariantsList from "./VariantsList";
import InputField from "./InputField";
import Logo from "./Logo";
import LayoutComponent from "./LayoutComponent";
import { useVariants } from "../model/useVariants";
import { useExtraCopies } from "../model/useExtraCopies";
import { useTotalItemsCount } from "../model/useTotalItemsCount";
import { useRemainingItems } from "../model/useRemainingItems";
import { usePrintableFileName } from "../model/usePrintableFileName";
import { useMergedVariants } from "../model/useMergedVarian";
import { getMaxCopies } from "../lib/getMaxCopies";
import { copyToClipboard } from "../lib/copyToClipboard";

interface CopyCalculatorContainerProps {
  orderNameSlot: React.ReactNode;
  ButtonResetGenerator: React.ComponentType<{ className: string }>;
}

const CopyCalculatorContainer = ({
  orderNameSlot,
  ButtonResetGenerator,
}: CopyCalculatorContainerProps) => {
  const { variants, setVariantField, addVariant, removeVariant } =
    useVariants();

  const { setExtraCopies, extraCopies } = useExtraCopies();
  const maxCopies = getMaxCopies(variants, extraCopies);
  const totalItemsCount = useTotalItemsCount(variants);
  const mergedVariants = useMergedVariants(variants);
  const printableFileName = usePrintableFileName(mergedVariants, maxCopies);

  const remainingItems = useRemainingItems(
    totalItemsCount,
    maxCopies,
    variants
  );

  return (
    <LayoutComponent
      title="Генератор имени файла для печати"
      resetButton={<ButtonResetGenerator className={styles.btnReset} />}
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
