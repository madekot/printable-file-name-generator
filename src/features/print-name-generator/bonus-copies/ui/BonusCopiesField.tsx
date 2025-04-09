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
  isVisible?: boolean;
  className?: string;
}

const BonusCopiesField = ({
  extraCopies,
  onChange,
  isVisible = true,
  className,
}: BonusCopiesFieldProps) => {
  const [internalValue, setInternalValue] = useState(extraCopies.toString());

  useEffect(() => {
    setInternalValue(extraCopies.toString());
  }, [extraCopies]);

  if (!isVisible) {
    return null;
  }

  const { handleChange } = createFilteredChange(setInternalValue, filterInvalidChars, onChange);

  const { handleBlur } = createEnforcedMinBlur(setInternalValue, 1);

  return (
    <InputFieldShared
      label="Бонусные копии:"
      placeholder={String(extraCopies)}
      inputMode="numeric"
      type="number"
      value={internalValue}
      onChange={handleChange}
      onBlur={handleBlur}
      min={1}
      wrapperClassName={className}
    />
  );
};

export default BonusCopiesField;
