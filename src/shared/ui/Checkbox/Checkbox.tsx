import clsx from "clsx";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  className,
  ...labelProps
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label {...labelProps} className={clsx(styles.checkbox, className)}>
      <input type="checkbox" checked={checked} onChange={handleChange} className={styles.input} />
      <span className={styles.checkmark} />
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
};

export default Checkbox;
