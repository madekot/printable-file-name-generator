import clsx from "clsx";
import styles from "./InputField.module.scss";
import { useState } from "react";
import {
  createEnforcedMinBlur,
  createFilteredChange,
  filterInvalidChars,
} from "./utils";

interface InputFieldProps extends React.HTMLProps<HTMLDivElement> {
  label: string;
  value: number;
  min: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  min,
  placeholder,
  className,
}) => {
  const [internalValue, setInternalValue] = useState(value.toString());

  const { handleChange } = createFilteredChange(
    setInternalValue,
    filterInvalidChars,
    onChange
  );

  const { handleBlur } = createEnforcedMinBlur(setInternalValue, min);

  return (
    <div className={clsx(styles.inputField, className)}>
      <label className={styles.label}>{label}</label>
      <input
        placeholder={placeholder}
        inputMode="numeric"
        type={"text"}
        value={internalValue}
        onChange={handleChange}
        onBlur={handleBlur}
        className={styles.input}
      />
    </div>
  );
};

export default InputField;
