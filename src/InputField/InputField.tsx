import clsx from "clsx";
import styles from "./InputField.module.scss";
import { useInternalValue } from "./useInternalValue";
import { restoreOnBlur } from "./restoreOnBlur";

interface InputFieldProps extends React.HTMLProps<HTMLDivElement> {
  label: string;
  value: number;
  min: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  min,
  placeholder,
  className,
  ...restProps
}) => {
  const { internalValue, setInternalValue, handleChange } = useInternalValue(
    value,
    onChange
  );

  const { handleBlur } = restoreOnBlur(
    internalValue,
    setInternalValue,
    value,
    min
  );

  return (
    <div className={clsx(styles.inputField, className)} {...restProps}>
      <label className={styles.label}>{label}</label>
      <input
        placeholder={placeholder}
        inputMode="numeric"
        type={"text"}
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
