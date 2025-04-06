import { GeneratorPrintableName } from "@features/generator-printable-name";
import { OrderNameField } from "@features/order-name-management";
import { ButtonResetGenerator } from "@features/reset-generator-name";

const App = () => {
  return (
    <div>
      <GeneratorPrintableName
        orderNameSlot={<OrderNameField />}
        ButtonResetGenerator={ButtonResetGenerator}
      />
    </div>
  );
};

export default App;
