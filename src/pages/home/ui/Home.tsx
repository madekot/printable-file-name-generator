import styles from "./Home.module.scss";
import LayoutComponent from "../ui/LayoutComponent";
import { BonusCopiesField, useExtraCopies } from "@features/print-name-generator/bonus-copies";
import { getMaxCopies } from "@features/print-name-generator/print-name";
import {
  VariantsList,
  ButtonAddVariant,
  useVariants,
} from "@features/print-name-generator/variant";
import { ButtonResetGenerator } from "@features/print-name-generator/reset-generator-name";
import {
  CalculationResult,
  useTotalItemsCount,
  useRemainingItems,
  usePrintableFileName,
  useMergedVariants,
} from "@features/print-name-generator/calculation-result";
import OrderNameField from "@features/print-name-generator/order-name-management";
import { Logo } from "@shared/ui/Logo";
import CopyToClipboardButton from "@features/print-name-generator/calculation-result/ui/CopyToClipboardButton";

const Home = () => {
  const { variants, setVariantField, addVariant, removeVariant } = useVariants();
  const { setExtraCopies, extraCopies } = useExtraCopies();
  const maxCopies = getMaxCopies(variants, extraCopies);
  const totalItemsCount = useTotalItemsCount(variants);
  const mergedVariants = useMergedVariants(variants);
  const printableFileName = usePrintableFileName(mergedVariants, maxCopies);
  const remainingItems = useRemainingItems(totalItemsCount, maxCopies, variants);

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
          totalItemsCount={totalItemsCount}
          extraCopies={extraCopies}
          addVariantButton={<ButtonAddVariant addVariant={addVariant} />}
          copyToClipboardButton={<CopyToClipboardButton copyContent={printableFileName} />}
        />
      }
      orderName={<OrderNameField />}
      extraCopiesInput={
        <BonusCopiesField
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
        />
      }
    />
  );
};

export default Home;
