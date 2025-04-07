import StrictNumericInputField from "@shared/ui/StrictNumericInputField";

interface BonusCopiesFieldProps {
  extraCopies: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BonusCopiesField = ({ extraCopies, onChange }: BonusCopiesFieldProps) => {
  return (
    <StrictNumericInputField
      label="Приладка:"
      value={extraCopies}
      placeholder={String(extraCopies)}
      type="number"
      onChange={onChange}
      min={0}
    />
  );
};

export default BonusCopiesField;
