import Checkbox from "@shared/ui/Checkbox";

interface OverPrintCheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const OverPrintCheckbox = ({ checked, onChange }: OverPrintCheckboxProps) => {
  return <Checkbox label={"Сверхтираж"} checked={checked} onChange={onChange} />;
};

export default OverPrintCheckbox;
