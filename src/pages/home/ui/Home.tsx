import styles from "./Home.module.scss";
import LayoutComponent from "../ui/LayoutComponent";
import {
  BonusCopiesCheckbox,
  BonusCopiesField,
  useBonusCopiesManager,
} from "@features/print-name-generator/bonus-copies";
import { getMaxCopies } from "@features/print-name-generator/print-name";
import {
  VariantsList,
  ButtonAddVariant,
  useVariants,
  CloneVariantButton,
} from "@features/print-name-generator/variant-management";
import { ButtonResetGenerator } from "@features/print-name-generator/reset-generator-name";
import {
  CalculationResult,
  useTotalItemsCount,
  useRemainingItems,
  usePrintableFileName,
  useMergedVariants,
  CopyToClipboardButton,
} from "@features/print-name-generator/calculation-result";
import OrderNameField from "@features/print-name-generator/order-name-management";
import { Logo } from "@shared/ui/Logo";

const Home = () => {
  const { variants, setVariantField, addVariant, removeVariant, cloneVariant } = useVariants();
  const { extraCopies, setExtraCopies, isVisible, toggleVisibility } = useBonusCopiesManager();
  const maxCopies = getMaxCopies(variants, extraCopies);
  const totalItemsCount = useTotalItemsCount(variants);
  const mergedVariants = useMergedVariants(variants);
  const printableFileName = usePrintableFileName(mergedVariants, maxCopies);
  const remainingItems = useRemainingItems(totalItemsCount, maxCopies, variants);

  return (
    <LayoutComponent
      bonusCopiesCheckbox={<BonusCopiesCheckbox checked={isVisible} onChange={toggleVisibility} />}
      title="Генератор имени файла для печати"
      resetButton={<ButtonResetGenerator className={styles.btnReset} />}
      logo={<Logo className={styles.logo} />}
      calculationResult={
        <CalculationResult
          totalCopies={maxCopies}
          remainingItems={remainingItems}
          dynamicString={printableFileName}
          totalItemsCount={totalItemsCount}
          extraCopies={extraCopies}
          addVariantButton={<ButtonAddVariant addVariant={addVariant} />}
          copyToClipboardButton={<CopyToClipboardButton copyContent={printableFileName} />}
        />
      }
      orderName={<OrderNameField />}
      extraCopiesInput={
        <BonusCopiesField
          isVisible={isVisible}
          extraCopies={extraCopies}
          onChange={(e) => setExtraCopies(Number(e.target.value))}
        />
      }
      variantsTitle="Варианты раскладки на листе"
      variantsList={
        <VariantsList
          variants={variants}
          setVariantField={setVariantField}
          removeVariant={removeVariant}
          renderCloneButton={(id) => (
            <CloneVariantButton variantId={id} clickHandler={cloneVariant} />
          )}
        />
      }
    />
  );
};

export default Home;
