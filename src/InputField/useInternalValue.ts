import { useState, useEffect } from "react";

export function useInternalValue(
  value: number,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
) {
  const [internalValue, setInternalValue] = useState(value.toString());

  useEffect(() => {
    setInternalValue(value.toString());
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    if (e.target.value.trim() !== "") {
      onChange?.(e);
    }
  };

  return { handleChange, internalValue, setInternalValue };
}
