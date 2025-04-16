import { useEffect, useState } from "react";
import { createEnforcedMinBlur, filterInvalidChars } from "@shared/lib/input-utils";
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
    if (!internalValue) {
      return;
    }
    setInternalValue(extraCopies.toString());
  }, [extraCopies, internalValue]);

  if (!isVisible) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = filterInvalidChars(e.target.value);
    setInternalValue(newValue);

    const newEvent = { ...e, target: { ...e.target, value: newValue } };
    onChange(newEvent);
  };

  const { handleBlur } = createEnforcedMinBlur(setInternalValue, MIN_BONUS_COPIES);

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
