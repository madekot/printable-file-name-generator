import style from "./OrderNameField.module.scss";
import { useOrderName } from "../model/useOrderName";
import InputField from "@shared/ui/InputField";
import { replaceSpacesWithUnderscore } from "@shared/lib/utils.string";

const OrderNameField = () => {
  const { orderNameLocal, setOrderNameLocal, setOrderName } = useOrderName();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setOrderNameLocal(inputValue);
    setOrderName(replaceSpacesWithUnderscore(inputValue));
  };

  return (
    <div className={style.orderNameField}>
      <InputField
        label={"Имя заказа"}
        value={orderNameLocal}
        placeholder={"Напишите имя заказа"}
        onChange={handleChange}
      />
    </div>
  );
};

export default OrderNameField;
