import Button from "../Button/Button";
import styles from "./ButtonAddVariant.module.scss";

interface ButtonAddVariantProps {
  addVariant: () => void;
}

const ButtonAddVariant: React.FC<ButtonAddVariantProps> = ({ addVariant }) => {
  return (
    <Button className={styles.buttonAddVariant} onClick={addVariant}>
      Добавить вариант
    </Button>
  );
};

export default ButtonAddVariant;
