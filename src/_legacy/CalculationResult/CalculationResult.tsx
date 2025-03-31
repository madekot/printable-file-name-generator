import React from "react";
import Button from "../Button/Button";
import ButtonAddVariant from "../ButtonAddVariant/ButtonAddVariant";
import styles from "./CalculationResult.module.scss";

interface CalculationResultProps {
  totalCopies: number;
  remainingItems: number;
  dynamicString: string;
  totalItemsCount: number;
  itemsAddedCount: number;
  extraCopies: number;
  onCopy: () => void;
  addVariant: () => void;
}

const CalculationResult: React.FC<CalculationResultProps> = ({
  totalCopies,
  remainingItems,
  dynamicString,
  onCopy,
  addVariant,
  totalItemsCount,
  extraCopies,
}) => {
  return (
    <div className={styles.result}>
      <div className={styles.column}>
        <div className={""}>
          <div className={styles.info}>
            <div className={styles.col}>
              <p>
                Копий в печать: <b>{totalCopies}</b>
              </p>
              <p>
                Копий в приладку: <b>{extraCopies}</b>
              </p>
            </div>
            <div className={styles.col}>
              <p>
                Тираж всех изделий: <b>{totalItemsCount}</b>
              </p>
              <p>
                Итого изделий в плюс: <b>{remainingItems}</b>
              </p>
            </div>
          </div>
          <b className={styles.dynamicString}>{dynamicString}</b>
        </div>
        <Button onClick={onCopy} className={styles.copyBtn} variant="green">
          Копировать имя
        </Button>
        <ButtonAddVariant addVariant={addVariant} />
      </div>
    </div>
  );
};

export default CalculationResult;
