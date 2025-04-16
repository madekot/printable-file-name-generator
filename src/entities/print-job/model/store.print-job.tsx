import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface PrintJobStoreStore {
  orderName: string;
  isOrderNameVisible: boolean;
  toggleOrderNameVisible: () => void;
  hideOrderName: () => void;
  setOrderName: (name: string) => void;
  resetOrderName: () => void;
}

const usePrintJobStore = create<PrintJobStoreStore>()(
  devtools(
    (set): PrintJobStoreStore => ({
      orderName: "",
      isOrderNameVisible: false,
      toggleOrderNameVisible: () =>
        set((state) => ({ isOrderNameVisible: !state.isOrderNameVisible })),
      hideOrderName: () => set(() => ({ isOrderNameVisible: false })),
      setOrderName: (name: string) => set(() => ({ orderName: name })),
      resetOrderName: () => set(() => ({ orderName: "" })),
    }),
    { name: "PrintJobStore" }
  )
);

export default usePrintJobStore;
