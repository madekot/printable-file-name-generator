import React from "react";
import clsx from "clsx";
import styles from "./InputField.module.scss";

interface InputFieldProps extends React.HTMLProps<HTMLDivElement> {
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  min = 1,
  type = "number",
  className,
  ...restProps
}) => {
  return (
    <div className={clsx(styles.inputField, className)} {...restProps}>
      <label className={styles.label}>{label}</label>
      <input
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
