import { useEffect, useState } from "react";
import {
  createEnforcedMinBlur,
  createFilteredChange,
  filterInvalidChars,
} from "@shared/lib/input-utils";
import InputField from "@shared/ui/InputField";

interface InputFieldProps extends React.HTMLProps<HTMLDivElement> {
  label: string;
  value: number;
  min: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const StrictNumericInputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  min,
  placeholder,
  className,
}) => {
  const [internalValue, setInternalValue] = useState(value.toString());

  useEffect(() => {
    setInternalValue(value.toString());
  }, [value]);

  const { handleChange } = createFilteredChange(setInternalValue, filterInvalidChars, onChange);

  const { handleBlur } = createEnforcedMinBlur(setInternalValue, min);

  return (
    <InputField
      label={label}
      placeholder={placeholder}
      inputMode="numeric"
      type="number"
      value={internalValue}
      onChange={handleChange}
      onBlur={handleBlur}
      wrapperClassName={className}
    />
  );
};

export default StrictNumericInputField;
