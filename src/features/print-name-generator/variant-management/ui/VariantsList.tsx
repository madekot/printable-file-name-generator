import { Variant } from "@shared/types/variant";
import VariantForm from "./VariantForm";
import { ReactNode } from "react";

type VariantField = "totalQuantity" | "itemsPerSheet";

type UseVariantsReturn = {
  variants: Variant[];
  setVariantField: (id: number, field: VariantField, value: number) => void;
  renderCloneButton?: (id: number) => ReactNode;
  renderDeleteButton?: (id: number, arrayLength: number) => ReactNode;
};

const VariantsList = ({
  variants,
  setVariantField,
  renderCloneButton,
  renderDeleteButton,
}: UseVariantsReturn) => (
  <>
    {variants.map((variant, index) => (
      <VariantForm
        key={variant.id}
        {...variant}
        counterVariant={variants.length > 1 ? index + 1 : undefined}
        onTotalQuantityChange={(value) => setVariantField(variant.id, "totalQuantity", value)}
        onItemsPerSheetChange={(value) => setVariantField(variant.id, "itemsPerSheet", value)}
        cloneVariantButton={renderCloneButton?.(variant.id)}
        deleteVariantButton={renderDeleteButton?.(variant.id, variants.length)}
      />
    ))}
  </>
);

export default VariantsList;
