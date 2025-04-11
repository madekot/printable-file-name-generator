import { useState } from "react";

export const useOverPrintCheckbox = (init = false) => {
  const [overPrintVisible, setOverPrintVisible] = useState(init);

  const toggleOverPrint = () => {
    setOverPrintVisible((prevState) => !prevState);
  };

  const showOverPrint = () => {
    setOverPrintVisible(true);
  };

  const hideOverPrint = () => {
    setOverPrintVisible(false);
  };

  return {
    overPrintVisible,
    toggleOverPrint,
    showOverPrint,
    hideOverPrint,
  };
};
