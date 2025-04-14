import styles from "./ButtonAddVariant.module.scss";
import Button from "@shared/ui/Button";

interface ButtonAddVariantProps {
  addVariant: () => void;
}

const ButtonAddVariant: React.FC<ButtonAddVariantProps> = ({ addVariant }) => {
  return (
    <Button className={styles.buttonAddVariant} onClick={addVariant}>
      Добавить вид
    </Button>
  );
};

export default ButtonAddVariant;
