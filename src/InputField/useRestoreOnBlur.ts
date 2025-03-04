export function useRestoreOnBlur(
  internalValue: string,
  setInternalValue: (value: string) => void,
  value: number,
  min: number,
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
) {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (internalValue === "" || Number(internalValue) <= min) {
      setInternalValue(value.toString());
    }

    onBlur?.(e);
  };

  return { handleBlur };
}
