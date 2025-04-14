import { useEffect, useState } from "react";
import {
  createEnforcedMinBlur,
  createFilteredChange,
  filterInvalidChars,
} from "@shared/lib/input-utils";
import InputFieldShared from "@shared/ui/InputField";
import { useAutoFocus } from "@shared/hooks";

const MIN_BONUS_COPIES = 1;

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
  const { ref } = useAutoFocus<HTMLInputElement>();

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
      ref={ref}
      label="Бонусные копии:"
      placeholder={String(Math.max(extraCopies, MIN_BONUS_COPIES))}
      inputMode="numeric"
      type="number"
      value={internalValue}
      onChange={handleChange}
      onBlur={handleBlur}
      min={MIN_BONUS_COPIES}
      wrapperClassName={className}
    />
  );
};

export default BonusCopiesField;
