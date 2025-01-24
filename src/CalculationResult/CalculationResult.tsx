import React from "react";
import Button from "../Button/Button";
import styles from "./CalculationResult.module.scss";

interface CalculationResultProps {
  totalCopies: number;
  remainingItems: number;
  dynamicString: string;
  onCopy: () => void;
}

const CalculationResult: React.FC<CalculationResultProps> = ({
  totalCopies,
  remainingItems,
  dynamicString,
  onCopy,
}) => {
  return (
    <div className={styles.result}>
      <div className={styles.column}>
        <div className={""}>
          <div className={styles.info}>
            <p>
              Копий в печать: <span>{totalCopies}</span>
            </p>
            <p>
              Изделий в плюс: <span>{remainingItems}</span>
            </p>
          </div>
          <b className={styles.dynamicString}>{dynamicString}</b>
        </div>
        <Button onClick={onCopy} className={styles.copyBtn} variant="green">
          Копировать имя
        </Button>
      </div>
    </div>
  );
};

export default CalculationResult;
