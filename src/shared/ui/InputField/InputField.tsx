import clsx from "clsx";
import styles from "./InputField.module.scss";
import { ComponentPropsWithRef, forwardRef, useId } from "react";

interface InputFieldProps extends ComponentPropsWithRef<"input"> {
  label: string;
  inputClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, labelClassName, inputClassName, wrapperClassName, ...props }, ref) => {
    const uniqueId = useId();

    return (
      <div
        className={clsx(styles.inputField, wrapperClassName)}
        data-testid={`input-field-wrapper-${uniqueId}`}
      >
        <label className={clsx(styles.label, labelClassName)} htmlFor={uniqueId}>
          {label}
        </label>
        <input ref={ref} {...props} className={clsx(styles.input, inputClassName)} id={uniqueId} />
      </div>
    );
  }
);

InputField.displayName = "InputField";
export default InputField;
