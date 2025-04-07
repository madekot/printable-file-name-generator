import { useEffect, useState } from "react";
import { Variant } from "@shared/types/variant";
import { mergeDuplicateLabelVariants } from "@features/print-name-generator/calculation-result/lib/mergeDuplicateLabelVariants";

export function useMergedVariants(variants: Variant[]) {
  const [mergedVariants, setMergedVariants] = useState<Variant[]>([]);

  useEffect(() => {
    setMergedVariants(mergeDuplicateLabelVariants(variants));
  }, [variants]);

  return mergedVariants;
}
