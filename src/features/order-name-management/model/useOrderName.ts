import { useEffect, useState } from "react";
import { usePrintJobStore } from "@entities/print-job";

export const useOrderName = () => {
  const { orderName, setOrderName } = usePrintJobStore();
  const [orderNameLocal, setOrderNameLocal] = useState(orderName);

  useEffect(() => {
    if (!orderName) {
      setOrderNameLocal(orderName);
    }
  }, [orderName, orderNameLocal]);

  return { orderNameLocal, setOrderNameLocal, setOrderName };
};
