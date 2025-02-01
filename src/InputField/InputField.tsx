import clsx from "clsx";
import styles from "./InputField.module.scss";

interface InputFieldProps extends React.HTMLProps<HTMLDivElement> {
  label: string;
  value?: number | string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  min?: number;
  type?: string;
  clearOnFocus?: boolean;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  onFocus,
  clearOnFocus = false,
  min,
  type,
  placeholder,
  className,
  ...restProps
}) => {
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (clearOnFocus) {
      e.target.value = "";
    }

    if (onFocus) {
      onFocus(e);
    }
  };

  return (
    <div className={clsx(styles.inputField, className)} {...restProps}>
      <label className={styles.label}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        min={min}
        onChange={onChange}
        onFocus={handleFocus}
        className={styles.input}
      />
    </div>
  );
};

export default InputField;
