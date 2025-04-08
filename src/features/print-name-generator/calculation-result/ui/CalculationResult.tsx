import styles from "./CalculationResult.module.scss";

interface CalculationResultProps {
  totalCopies: number;
  remainingItems: number;
  dynamicString: string;
  totalItemsCount: number;
  extraCopies: number;
  addVariantButton: React.ReactNode;
  copyToClipboardButton: React.ReactNode;
}

const CalculationResult: React.FC<CalculationResultProps> = ({
  totalCopies,
  remainingItems,
  dynamicString,
  totalItemsCount,
  extraCopies,
  addVariantButton,
  copyToClipboardButton,
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
        {copyToClipboardButton}
      </div>
    </div>
  );
};

export default CalculationResult;
