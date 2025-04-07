import { usePrintJobStore } from "@entities/print-job";
import { useObserverReset } from "@entities/reset-manager";

export const useResetAll = () => {
  const resetOrderName = usePrintJobStore((s) => s.resetOrderName);
  const { resetAll: resetAllObserver } = useObserverReset();
  return () => {
    resetAllObserver();
    resetOrderName();
  };
};
