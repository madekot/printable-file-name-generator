export function createEnforcedMinBlur(
  setInternalValue: (value: string) => void,
  min: number,
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
) {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!(Number(e.target.value) <= min)) {
      onBlur?.(e);
      return;
    }

    const newEvent = { ...e, target: { ...e.target, value: min.toString() } };
    setInternalValue(newEvent.target.value);

    onBlur?.(newEvent);
  };

  return { handleBlur };
}
