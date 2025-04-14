import StrictNumericInputField from "./StrictNumericInputField";
import styles from "./VariantForm.module.scss";

const MIN_VALUE = 1;

interface VariantFormProps {
  totalQuantity: number;
  itemsPerSheet: number;
  counterVariant?: number;
  cloneVariantButton?: React.ReactNode;
  onTotalQuantityChange: (value: number) => void;
  onItemsPerSheetChange: (value: number) => void;
  deleteVariantButton?: React.ReactNode;
}

const VariantForm: React.FC<VariantFormProps> = ({
  totalQuantity,
  itemsPerSheet,
  counterVariant,
  cloneVariantButton,
  onTotalQuantityChange,
  onItemsPerSheetChange,
  deleteVariantButton,
}) => {
  return (
    <form className={styles.variantForm}>
      {counterVariant && <div className={styles.title}>Вид №{counterVariant}</div>}
      <div className={styles.variantItem}>
        <div className={styles.fields}>
          <StrictNumericInputField
            className={styles.input}
            label="Тираж"
            value={totalQuantity}
            placeholder={String(totalQuantity)}
            onChange={(e) => onTotalQuantityChange(Math.max(Number(e.target.value), MIN_VALUE))}
            min={MIN_VALUE}
          />
          <StrictNumericInputField
            className={styles.input}
            label="Штук на&nbsp;листе:"
            value={itemsPerSheet}
            placeholder={String(itemsPerSheet)}
            onChange={(e) => onItemsPerSheetChange(Math.max(Number(e.target.value), MIN_VALUE))}
            min={MIN_VALUE}
          />
          {cloneVariantButton}
        </div>
        {deleteVariantButton && <div className={styles.buttonGroup}>{deleteVariantButton}</div>}
      </div>
    </form>
  );
};

export default VariantForm;
