import styles from "./Layout.module.scss";

interface LayoutComponentProps {
  title: string;
  variantsTitle: string;
  resetButton: React.ReactNode;
  logo: React.ReactNode;
  calculationResult: React.ReactNode;
  extraCopiesInput: React.ReactNode;
  variantsList: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({
  title,
  variantsTitle,
  resetButton,
  logo,
  calculationResult,
  extraCopiesInput,
  variantsList,
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
        <form className={styles.column}>{extraCopiesInput}</form>
      </div>

      <div className={styles.varintsBox}>
        <b className={styles.varintsTitle}>{variantsTitle}</b>
        <div className={styles.varints}>{variantsList}</div>
      </div>
    </div>
  );
};
