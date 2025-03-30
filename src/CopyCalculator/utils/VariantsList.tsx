import VariantForm from "../../VariantForm/VariantForm";

interface Variant {
  id: number;
  totalQuantity: number;
  itemsPerSheet: number;
  numLabels: number;
}

type VariantField = "totalQuantity" | "itemsPerSheet" | "numLabels";

type UseVariantsReturn = {
  variants: Variant[];
  setVariantField: (id: number, field: VariantField, value: number) => void;
  removeVariant: (id: number) => void;
};

export const VariantsList = ({
  variants,
  removeVariant,
  setVariantField,
}: UseVariantsReturn) => (
  <>
    {variants.map((variant, index) => (
      <VariantForm
        key={variant.id}
        {...variant}
        disabled={variants.length === 1}
        counterVariant={index + 1}
        onDelete={() => removeVariant(variant.id)}
        onTotalQuantityChange={(value) =>
          setVariantField(variant.id, "totalQuantity", value)
        }
        onItemsPerSheetChange={(value) =>
          setVariantField(variant.id, "itemsPerSheet", value)
        }
        onNumLabelsChange={(value) =>
          setVariantField(variant.id, "numLabels", value)
        }
      />
    ))}
  </>
);
