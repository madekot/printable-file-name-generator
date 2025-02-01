import React from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import styles from "./VariantForm.module.scss";

const MIN_VALUE = 1;

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
            placeholder={String(totalQuantity)}
            type="number"
            onChange={(e) =>
              onTotalQuantityChange(Math.max(Number(e.target.value), MIN_VALUE))
            }
            min={MIN_VALUE}
          />
          <InputField
            className={styles.input}
            label="Изделий варианта на&nbsp;листе:"
            value={itemsPerSheet}
            placeholder={String(itemsPerSheet)}
            type="number"
            onChange={(e) =>
              onItemsPerSheetChange(Math.max(Number(e.target.value), MIN_VALUE))
            }
            min={MIN_VALUE}
          />
          <InputField
            className={styles.input}
            label="Одинаковых видов:"
            value={numLabels}
            placeholder={String(numLabels)}
            type="number"
            onChange={(e) =>
              onNumLabelsChange(Math.max(Number(e.target.value), MIN_VALUE))
            }
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
