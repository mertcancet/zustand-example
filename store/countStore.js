const countStore = (set, get) => {
  return {
    count: 11,
    decrementCount: () => set({ count: get().count - 1 }),
    incrementCount: () => set({ count: get().count + 1 }),
    resetCount: () => set({ count: 0 }),
  };
};

export default countStore;
