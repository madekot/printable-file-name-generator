import React from "react";
import clsx from "clsx";
import styles from "./InputField.module.scss";

interface InputFieldProps extends React.HTMLProps<HTMLDivElement> {
  label: string;
  value?: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  type?: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  min,
  type,
  placeholder,
  className,
  ...restProps
}) => {
  return (
    <div className={clsx(styles.inputField, className)} {...restProps}>
      <label className={styles.label}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        min={min}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default InputField;
