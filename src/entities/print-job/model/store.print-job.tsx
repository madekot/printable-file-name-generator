import { create } from "zustand";

interface PrintJobStoreStore {
  printableFileName: string;
  orderName: string;
  setPrintableFileName: (name: string) => void;
  setOrderName: (name: string) => void;
  resetOrderName: () => void;
}

const usePrintJobStore = create<PrintJobStoreStore>((set) => ({
  printableFileName: "",
  orderName: "",
  setPrintableFileName: (name: string) =>
    set(() => ({ printableFileName: name })),
  setOrderName: (name: string) => set(() => ({ orderName: name })),
  resetOrderName: () => set(() => ({ orderName: "" })),
}));

export default usePrintJobStore;
