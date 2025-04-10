import styles from "./BonusCopiesCheckbox.module.scss";
import clsx from "clsx";
import Checkbox from "@shared/ui/Checkbox";

interface BonusCopiesCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export const BonusCopiesCheckbox = ({ checked, className, onChange }: BonusCopiesCheckboxProps) => {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      label={"Бонусные копии"}
      className={clsx(styles.button, className)}
    />
  );
};
