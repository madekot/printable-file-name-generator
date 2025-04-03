import styles from "./LayoutComponent.module.scss";

interface LayoutComponentProps {
  title: string;
  variantsTitle: string;
  resetButton: React.ReactNode;
  logo: React.ReactNode;
  calculationResult: React.ReactNode;
  extraCopiesInput: React.ReactNode;
  variantsList: React.ReactNode;
  orderName: React.ReactNode;
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
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {resetButton}
        {logo}
      </div>

      {calculationResult}

      <div className={styles.headerBox}>
        <div className={styles.column}>{extraCopiesInput}</div>
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
