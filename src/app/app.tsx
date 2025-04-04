import { GeneratorPrintableName } from "@features/generator-printable-name";
import { OrderNameField } from "@features/order-name-management";

const App = () => {
  return (
    <div>
      <GeneratorPrintableName orderNameSlot={<OrderNameField />} />
    </div>
  );
};

export default App;
