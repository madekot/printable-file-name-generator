import Checkbox from "@shared/ui/Checkbox";

interface OverPrintCheckboxProps {
  checked: boolean;
  onChange: () => void;
  className?: string;
}

const OverPrintCheckbox = ({ checked, onChange, className }: OverPrintCheckboxProps) => {
  return (
    <Checkbox
      className={className}
      label={"Показать сверхтираж шт."}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default OverPrintCheckbox;
