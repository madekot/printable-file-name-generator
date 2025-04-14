import { useState } from "react";
import { useObserverReset } from "@entities/reset-manager";

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

  useObserverReset(hideOverPrint);

  return {
    overPrintVisible,
    toggleOverPrint,
    showOverPrint,
    hideOverPrint,
  };
};
