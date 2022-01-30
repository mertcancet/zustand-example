const todoStore = (set, get) => {
  return {
    todos: [],
    addTodo: (todo) =>
      set({
        todos: [...get().todos, { title: todo, id: new Date().getTime() }],
      }),
    deleteTodo: (id) =>
      set({ todos: get().todos.filter((todo) => todo.id !== id) }),
  };
};

export default todoStore;
