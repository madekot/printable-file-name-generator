export function restoreOnBlur(
  internalValue: string,
  setInternalValue: (value: string) => void,
  value: number,
  min: number
) {
  const handleBlur = () => {
    if (Number(internalValue) < min) {
      setInternalValue(value.toString());
    }
  };

  return { handleBlur };
}
