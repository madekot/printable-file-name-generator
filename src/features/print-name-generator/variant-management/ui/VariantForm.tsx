import StrictNumericInputField from "./StrictNumericInputField";
import styles from "./VariantForm.module.scss";
import Button from "@shared/ui/Button";

const MIN_VALUE = 1;

interface VariantFormProps {
  totalQuantity: number;
  itemsPerSheet: number;
  disabled?: boolean;
  counterVariant: number;
  onTotalQuantityChange: (value: number) => void;
  onItemsPerSheetChange: (value: number) => void;
  onDelete: () => void;
}

const VariantForm: React.FC<VariantFormProps> = ({
  totalQuantity,
  itemsPerSheet,
  disabled,
  counterVariant,
  onTotalQuantityChange,
  onItemsPerSheetChange,
  onDelete,
}) => {
  return (
    <form className={styles.variantForm}>
      <div className={styles.title}>Вариант №{counterVariant}</div>
      <div className={styles.variantItem}>
        <div className={styles.fields}>
          <StrictNumericInputField
            className={styles.input}
            label="Тираж варианта"
            value={totalQuantity}
            placeholder={String(totalQuantity)}
            onChange={(e) => onTotalQuantityChange(Math.max(Number(e.target.value), MIN_VALUE))}
            min={MIN_VALUE}
          />
          <StrictNumericInputField
            className={styles.input}
            label="Изделий варианта на&nbsp;листе:"
            value={itemsPerSheet}
            placeholder={String(itemsPerSheet)}
            onChange={(e) => onItemsPerSheetChange(Math.max(Number(e.target.value), MIN_VALUE))}
            min={MIN_VALUE}
          />
        </div>
        <div className={styles.buttonGroup}>
          <Button
            variant="delete"
            onClick={onDelete}
            disabled={disabled}
            className={styles.btnDelete}
          >
            Удалить вариант
          </Button>
        </div>
      </div>
    </form>
  );
};

export default VariantForm;
