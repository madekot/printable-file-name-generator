import { Variant } from "@shared/types/variant";
import VariantForm from "./VariantForm";

type VariantField = "totalQuantity" | "itemsPerSheet";

type UseVariantsReturn = {
  variants: Variant[];
  setVariantField: (id: number, field: VariantField, value: number) => void;
  removeVariant: (id: number) => void;
  renderCloneButton?: (id: number) => React.ReactNode;
};

const VariantsList = ({
  variants,
  removeVariant,
  setVariantField,
  renderCloneButton,
}: UseVariantsReturn) => (
  <>
    {variants.map((variant, index) => (
      <VariantForm
        key={variant.id}
        {...variant}
        disabled={variants.length === 1}
        counterVariant={index + 1}
        onDelete={() => removeVariant(variant.id)}
        onTotalQuantityChange={(value) => setVariantField(variant.id, "totalQuantity", value)}
        onItemsPerSheetChange={(value) => setVariantField(variant.id, "itemsPerSheet", value)}
        cloneVariantButton={renderCloneButton?.(variant.id)}
      />
    ))}
  </>
);

export default VariantsList;
