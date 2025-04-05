import { useEffect, useState } from "react";
import { Variant } from "../model/types";
import { mergeDuplicateLabelVariants } from "../lib/mergeDuplicateLabelVariants";

export function useMergedVariants(variants: Variant[]) {
  const [mergedVariants, setMergedVariants] = useState<Variant[]>([]);

  useEffect(() => {
    setMergedVariants(mergeDuplicateLabelVariants(variants));
  }, [variants]);

  return mergedVariants;
}
