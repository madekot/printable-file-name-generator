import style from "./OrderNameField.module.scss";
import InputField from "@shared/ui/InputField";
import { usePrintJobStore } from "@entities/print-job";

const OrderNameField = () => {
  const { orderName, setOrderName } = usePrintJobStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderName(e.target.value);
  };

  return (
    <div className={style.orderNameField}>
      <InputField
        label={"Имя заказа"}
        value={orderName}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default OrderNameField;
