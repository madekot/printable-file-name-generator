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
  integerOnly?: boolean;
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
  integerOnly = false,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    if (integerOnly) {
      newValue = newValue.replace(/[^0-9]/g, "");
    }

    if (onChange) {
      onChange({ ...e, target: { ...e.target, value: newValue } });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (integerOnly && (e.key === "." || e.key === "," || e.key === "e")) {
      e.preventDefault();
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
        onChange={handleChange}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        className={styles.input}
      />
    </div>
  );
};

export default InputField;
