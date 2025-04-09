import { useState } from "react";

export const useFieldVisibility = (initialState: boolean) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const show = () => {
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  return {
    isVisible,
    toggleVisibility,
    show,
    hide,
  };
};
