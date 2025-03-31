export function createFilteredChange(
  setInternalValue: (val: string) => void,
  filter: (val: string) => string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = filter(e.target.value);
    setInternalValue(newValue);

    const newEvent = { ...e, target: { ...e.target, value: newValue } };
    onChange?.(newEvent);
  };

  return { handleChange };
}
