import styles from "./Home.module.scss";
import LayoutComponent from "../ui/LayoutComponent";
import {
  BonusCopiesCheckbox,
  BonusCopiesField,
  OverPrintCheckbox,
  useBonusCopiesManager,
  useOverPrintCheckbox,
} from "@features/print-name-generator/bonus-copies";
import { getMaxCopies } from "@features/print-name-generator/print-name";
import {
  ButtonAddVariant,
  CloneVariantButton,
  useVariants,
  VariantsList,
} from "@features/print-name-generator/variant-management";
import { ButtonResetGenerator } from "@features/print-name-generator/reset-generator-name";
import {
  CalculationResult,
  CopyToClipboardButton,
  useMergedVariants,
  usePrintableFileName,
  useRemainingItems,
  useTotalItemsCount,
} from "@features/print-name-generator/calculation-result";
import OrderNameField, {
  useOrderNameCheckbox,
} from "@features/print-name-generator/order-name-management";
import { Logo } from "@shared/ui/Logo";
import Checkbox from "@shared/ui/Checkbox";

const Home = () => {
  const { variants, setVariantField, addVariant, removeVariant, cloneVariant } = useVariants();
  const {
    extraCopies,
    setExtraCopies,
    isVisible: isBonusCopiesVisible,
    toggleVisibility,
  } = useBonusCopiesManager();
  const maxCopies = getMaxCopies(variants, extraCopies);
  const totalItemsCount = useTotalItemsCount(variants);
  const mergedVariants = useMergedVariants(variants);
  const remainingItems = useRemainingItems(totalItemsCount, maxCopies, variants);
  const { overPrintVisible, toggleOverPrint } = useOverPrintCheckbox();
  const { isOrderNameVisible, toggleOrderNameVisible } = useOrderNameCheckbox();

  const printableFileName = usePrintableFileName({
    variants: mergedVariants,
    maxCopies,
    bonusCopies: extraCopies,
    showOverprint: overPrintVisible,
  });

  return (
    <LayoutComponent
      overPrintCheckbox={
        <OverPrintCheckbox checked={overPrintVisible} onChange={toggleOverPrint} />
      }
      bonusCopiesCheckbox={
        <BonusCopiesCheckbox checked={isBonusCopiesVisible} onChange={toggleVisibility} />
      }
      orderNameCheckBox={
        <Checkbox
          label={"Имя заказа"}
          checked={isOrderNameVisible}
          onChange={toggleOrderNameVisible}
        />
      }
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
      orderName={isOrderNameVisible && <OrderNameField />}
      extraCopiesInput={
        isBonusCopiesVisible && (
          <BonusCopiesField
            isVisible={isBonusCopiesVisible}
            extraCopies={extraCopies}
            onChange={(e) => setExtraCopies(Number(e.target.value))}
          />
        )
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
