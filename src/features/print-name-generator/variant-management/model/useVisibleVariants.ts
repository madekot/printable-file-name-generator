import { useEffect, useState } from "react";
import { useObserverReset } from "@entities/reset-manager";
import { Variant } from "@shared/types/variant";

export const useVisibleVariants = (variants: Variant[], initVisible = false) => {
  const [variantsVisible, setVariantsVisible] = useState(variants);
  const [isVisibleVariants, setIsVisibleVariants] = useState(initVisible);

  const toggleVisibleVariants = () => setIsVisibleVariants((prevState) => !prevState);
  const hideVisibleVariants = () => setIsVisibleVariants(false);

  useEffect(() => {
    if (!isVisibleVariants) {
      setVariantsVisible([variants[0]]);
      return;
    }
    setVariantsVisible(variants);
  }, [isVisibleVariants, variants]);

  useObserverReset(hideVisibleVariants);

  return {
    isVisibleVariants,
    variantsVisible,
    toggleVisibleVariants,
    hideVisibleVariants,
  };
};
