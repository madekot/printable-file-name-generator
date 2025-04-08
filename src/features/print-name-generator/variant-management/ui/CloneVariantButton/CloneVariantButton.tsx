import Button from "@shared/ui/Button";
import clsx from "clsx";
import styles from "./CloneVariantButton.module.scss";
import { LuCopyPlus as Icon } from "@shared/ui/icon";
import { ButtonHTMLAttributes } from "react";

interface CloneVariantButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  clickHandler: (variantId: number) => void;
  variantId: number;
}

const CloneVariantButton = ({
  variantId,
  clickHandler,
  className,
  children = "Дублировать",
}: CloneVariantButtonProps) => {
  return (
    <Button
      className={clsx(styles.cloneVariantButton, className)}
      onClick={() => clickHandler(variantId)}
      variant={"green"}
    >
      {children}
      <Icon />
    </Button>
  );
};

export default CloneVariantButton;
