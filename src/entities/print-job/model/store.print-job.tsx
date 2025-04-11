import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface PrintJobStoreStore {
  printableFileName: string;
  orderName: string;
  isOrderNameVisible: boolean;
  toggleOrderNameVisible: () => void;
  hideOrderName: () => void;
  setPrintableFileName: (name: string) => void;
  setOrderName: (name: string) => void;
  resetOrderName: () => void;
}

const usePrintJobStore = create<PrintJobStoreStore>()(
  devtools(
    (set) => ({
      printableFileName: "",
      orderName: "",
      isOrderNameVisible: false,
      toggleOrderNameVisible: () =>
        set((state) => ({ isOrderNameVisible: !state.isOrderNameVisible })),
      hideOrderName: () => set(() => ({ isOrderNameVisible: false })),
      setPrintableFileName: (name: string) => set(() => ({ printableFileName: name })),
      setOrderName: (name: string) => set(() => ({ orderName: name })),
      resetOrderName: () => set(() => ({ orderName: "" })),
    }),
    { name: "PrintJobStore" }
  )
);

export default usePrintJobStore;
