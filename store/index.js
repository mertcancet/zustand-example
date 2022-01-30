import create from "zustand";

import countStore from "./countStore";
import todoStore from "./todoStore";

const useStore = create((set, get) => ({
  ...countStore(set, get),
  ...todoStore(set, get),
}));

export { useStore };
