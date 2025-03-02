import clsx from "clsx";
import styles from "./InputField.module.scss";
import { useRef } from "react";

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
  onBlur,
  clearOnFocus = false,
  min,
  type,
  placeholder,
  className,
  integerOnly = false,
  defaultValue,
  inputMode,
  ...restProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

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

    if (
      integerOnly &&
      inputRef.current &&
      inputRef.current.value.length > 1 &&
      inputRef.current.value[0] === "0"
    ) {
      newValue = "0";
    }

    if (integerOnly) {
      // Оставляем только цифры
      newValue = newValue.replace(/[^0-9]/g, "");
    }

    if (inputRef.current) {
      inputRef.current.value = newValue;
    }

    if (onChange) {
      onChange({ ...e, target: { ...e.target, value: newValue } });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      integerOnly &&
      (e.key === "." ||
        e.key === "," ||
        e.key === "e" ||
        e.key === "-" ||
        e.key === "+")
    ) {
      e.preventDefault();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (integerOnly && min !== undefined && inputRef.current) {
      const currentValue = parseFloat(inputRef.current.value);

      if (currentValue < min || inputRef.current.value === "") {
        inputRef.current.value = min.toString();
        onChange?.({ ...e, target: { ...e.target, value: min.toString() } });
      }
    }

    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <div className={clsx(styles.inputField, className)} {...restProps}>
      <label className={styles.label}>{label}</label>
      <input
        ref={inputRef}
        placeholder={placeholder}
        type={type}
        inputMode={inputMode}
        defaultValue={defaultValue}
        value={value}
        min={min}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={styles.input}
      />
    </div>
  );
};

export default InputField;
