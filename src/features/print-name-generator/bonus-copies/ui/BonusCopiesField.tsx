import InputField from "@features/print-name-generator/variant/ui/InputField";

interface BonusCopiesFieldProps {
  extraCopies: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BonusCopiesField = ({ extraCopies, onChange }: BonusCopiesFieldProps) => {
  return (
    <InputField
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
