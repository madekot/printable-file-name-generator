import { useState, useEffect } from "react";

const filterInvalidChars = (val: string) => val.replace(/\D/g, "");

export function useInternalValue(
  value: number,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
) {
  const [internalValue, setInternalValue] = useState(value.toString());

  useEffect(() => {
    setInternalValue(value.toString());
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = filterInvalidChars(e.target.value);

    const newEvent = {
      ...e,
      target: {
        ...e.target,
        value: newValue,
      },
    };

    setInternalValue(newValue);
    onChange?.(newEvent);
  };

  return { handleChange, internalValue, setInternalValue };
}
