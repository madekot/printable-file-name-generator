import clsx from "clsx";
import styles from "./InputField.module.scss";
import { useInternalValue } from "./useInternalValue";
import { useRestoreOnBlur } from "./useRestoreOnBlur";

interface InputFieldProps extends React.HTMLProps<HTMLDivElement> {
  label: string;
  value: number;
  min: number;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  min,
  type,
  placeholder,
  className,
  onBlur,
  ...restProps
}) => {
  const { internalValue, setInternalValue, handleChange } = useInternalValue(
    value,
    onChange
  );
  const { handleBlur } = useRestoreOnBlur(
    internalValue,
    setInternalValue,
    value,
    min,
    onBlur
  );

  return (
    <div className={clsx(styles.inputField, className)} {...restProps}>
      <label className={styles.label}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={internalValue}
        min={min}
        onChange={handleChange}
        onBlur={handleBlur}
        className={styles.input}
      />
    </div>
  );
};

export default InputField;
