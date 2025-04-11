import styles from "./LayoutComponent.module.scss";

interface LayoutComponentProps {
  title: string;
  variantsTitle: string;
  resetButton: React.ReactNode;
  logo: React.ReactNode;
  calculationResult: React.ReactNode;
  extraCopiesInput?: React.ReactNode;
  variantsList: React.ReactNode;
  orderName: React.ReactNode;
  bonusCopiesCheckbox?: React.ReactNode;
  overPrintCheckbox?: React.ReactNode;
}

const LayoutComponent: React.FC<LayoutComponentProps> = ({
  title,
  variantsTitle,
  resetButton,
  logo,
  calculationResult,
  extraCopiesInput,
  variantsList,
  orderName,
  bonusCopiesCheckbox,
  overPrintCheckbox,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {resetButton}
        {logo}
      </div>
      {bonusCopiesCheckbox && <div>{bonusCopiesCheckbox}</div>}
      {overPrintCheckbox && <div>{overPrintCheckbox}</div>}
      {calculationResult}

      <div className={styles.headerBox}>
        {extraCopiesInput && <div className={styles.column}>{extraCopiesInput}</div>}
        <div className={styles.column}>{orderName}</div>
      </div>

      <div className={styles.varintsBox}>
        <b className={styles.varintsTitle}>{variantsTitle}</b>
        <div className={styles.varints}>{variantsList}</div>
      </div>
    </div>
  );
};

export default LayoutComponent;
