import { useEffect, useState } from "react";
import {
  createEnforcedMinBlur,
  createFilteredChange,
  filterInvalidChars,
} from "@shared/lib/input-utils";
import InputFieldShared from "@shared/ui/InputField";

interface BonusCopiesFieldProps {
  extraCopies: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const BonusCopiesField = ({ extraCopies, onChange, className }: BonusCopiesFieldProps) => {
  const [internalValue, setInternalValue] = useState(extraCopies.toString());

  useEffect(() => {
    setInternalValue(extraCopies.toString());
  }, [extraCopies]);

  const { handleChange } = createFilteredChange(setInternalValue, filterInvalidChars, onChange);

  const { handleBlur } = createEnforcedMinBlur(setInternalValue, 0);

  return (
    <InputFieldShared
      label="Приладка:"
      placeholder={String(extraCopies)}
      inputMode="numeric"
      type="number"
      value={internalValue}
      onChange={handleChange}
      onBlur={handleBlur}
      min={0}
      wrapperClassName={className}
    />
  );
};

export default BonusCopiesField;
