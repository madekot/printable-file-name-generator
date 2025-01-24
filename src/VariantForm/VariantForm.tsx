import React from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import styles from "./VariantForm.module.scss";

interface VariantFormProps {
  totalQuantity: number;
  itemsPerSheet: number;
  numLabels: number;
  disabled?: boolean;
  counterVariant: number;
  onTotalQuantityChange: (value: number) => void;
  onItemsPerSheetChange: (value: number) => void;
  onNumLabelsChange: (value: number) => void;
  onDelete: () => void;
}

const VariantForm: React.FC<VariantFormProps> = ({
  totalQuantity,
  itemsPerSheet,
  numLabels,
  disabled,
  counterVariant,
  onTotalQuantityChange,
  onItemsPerSheetChange,
  onNumLabelsChange,
  onDelete,
}) => {
  return (
    <form className={styles.variantForm}>
      <div className={styles.title}>Вариант №{counterVariant}</div>
      <div className={styles.variantItem}>
        <div className={styles.fields}>
          <InputField
            className={styles.input}
            label="Тираж варианта"
            value={totalQuantity}
            onChange={(e) =>
              onTotalQuantityChange(Math.max(Number(e.target.value), 1))
            }
            min={1}
          />
          <InputField
            className={styles.input}
            label="Изделий варианта на&nbsp;листе:"
            value={itemsPerSheet}
            onChange={(e) =>
              onItemsPerSheetChange(Math.max(Number(e.target.value), 1))
            }
            min={1}
          />
          <InputField
            className={styles.input}
            label="Одинаковых видов:"
            value={numLabels}
            onChange={(e) =>
              onNumLabelsChange(Math.max(Number(e.target.value), 1))
            }
            min={1}
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
