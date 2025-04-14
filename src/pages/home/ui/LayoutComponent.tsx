import styles from "./LayoutComponent.module.scss";

interface LayoutComponentProps {
  title: string;
  resetButton: React.ReactNode;
  logo: React.ReactNode;
  calculationResult: React.ReactNode;
  extraCopiesInput?: React.ReactNode;
  variantsList: React.ReactNode;
  orderName: React.ReactNode;
  bonusCopiesCheckbox?: React.ReactNode;
  overPrintCheckbox?: React.ReactNode;
  orderNameCheckBox?: React.ReactNode;
  variantCheckBox?: React.ReactNode;
}

const LayoutComponent: React.FC<LayoutComponentProps> = ({
  title,
  resetButton,
  logo,
  calculationResult,
  extraCopiesInput,
  variantsList,
  orderName,
  bonusCopiesCheckbox,
  overPrintCheckbox,
  orderNameCheckBox,
  variantCheckBox,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {resetButton}
        {logo}
      </div>
      <div className={styles.rowCheckbox}>
        <div className={styles.collumnCheckbox}>
          {bonusCopiesCheckbox && <div>{bonusCopiesCheckbox}</div>}
          {overPrintCheckbox && <div>{overPrintCheckbox}</div>}
        </div>

        <div className={styles.collumnCheckbox}>
          {orderNameCheckBox && <div>{orderNameCheckBox}</div>}
          {variantCheckBox && <div>{variantCheckBox}</div>}
        </div>
      </div>
      {calculationResult}

      {(orderName || extraCopiesInput) && (
        <div className={styles.headerBox}>
          {extraCopiesInput && <div className={styles.column}>{extraCopiesInput}</div>}
          {orderName && <div className={styles.column}>{orderName}</div>}
        </div>
      )}

      <div className={styles.varints}>{variantsList}</div>
    </div>
  );
};

export default LayoutComponent;
