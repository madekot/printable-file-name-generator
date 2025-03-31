import clsx from "clsx";
import styles from "./InputField.module.scss";

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
  return (
    <div className={clsx(styles.inputField, wrapperClassName)}>
      <label className={clsx(styles.label, labelClassName)}>{label}</label>
      <input {...props} className={clsx(styles.input, inputClassName)} />
    </div>
  );
};

export default InputField;
