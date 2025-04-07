import Button from "@shared/ui/Button";
import styles from "./CloneVariantButton.module.scss";
import { LuCopyPlus as Icon } from "@shared/ui/icon";

interface CloneVariantButtonProps {
  onClick: (id: number) => void;
  id: number;
}

const CloneVariantButton = ({ id, onClick }: CloneVariantButtonProps) => {
  return (
    <Button className={styles.cloneVariantButton} onClick={() => onClick(id)} variant={"green"}>
      Дублировать
      <Icon />
    </Button>
  );
};

export default CloneVariantButton;
