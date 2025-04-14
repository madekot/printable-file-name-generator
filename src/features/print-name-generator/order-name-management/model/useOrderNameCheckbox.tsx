import { usePrintJobStore } from "@entities/print-job";
import { useObserverReset } from "@entities/reset-manager";

export const useOrderNameCheckbox = () => {
  const { isOrderNameVisible, toggleOrderNameVisible, hideOrderName } = usePrintJobStore();

  useObserverReset(hideOrderName);
  return {
    isOrderNameVisible,
    toggleOrderNameVisible,
  };
};
