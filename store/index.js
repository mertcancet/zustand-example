import create from "zustand";

import countStore from "./countStore";

const useStore = create((set, get) => ({
  ...countStore(set, get),
}));

export { useStore };
