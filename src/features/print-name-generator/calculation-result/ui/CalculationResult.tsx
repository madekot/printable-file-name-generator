import styles from "./CalculationResult.module.scss";
import Button from "@shared/ui/Button";
import { copyToClipboard } from "@features/print-name-generator/calculation-result/lib/copyToClipboard";

interface CalculationResultProps {
  totalCopies: number;
  remainingItems: number;
  dynamicString: string;
  totalItemsCount: number;
  extraCopies: number;
  addVariantButton: React.ReactNode;
}

const CalculationResult: React.FC<CalculationResultProps> = ({
  totalCopies,
  remainingItems,
  dynamicString,
  totalItemsCount,
  extraCopies,
  addVariantButton,
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
        {addVariantButton}
        <Button
          onClick={() => copyToClipboard(dynamicString)}
          className={styles.copyBtn}
          variant="green"
        >
          Копировать имя
        </Button>
      </div>
    </div>
  );
};

export default CalculationResult;
