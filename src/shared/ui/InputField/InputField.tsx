import clsx from "clsx";
import styles from "./InputField.module.scss";
import { useId } from "react";

interface InputFieldProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  inputClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

const InputField = ({
  label,
  labelClassName,
  inputClassName,
  wrapperClassName,
  ...props
}: InputFieldProps) => {
  const uniqueId = useId();

  return (
    <div
      className={clsx(styles.inputField, wrapperClassName)}
      data-testid={`input-field-wrapper-${uniqueId}`}
    >
      <label className={clsx(styles.label, labelClassName)} htmlFor={uniqueId}>
        {label}
      </label>
      <input
        {...props}
        className={clsx(styles.input, inputClassName)}
        id={uniqueId}
      />
    </div>
  );
};

export default InputField;
