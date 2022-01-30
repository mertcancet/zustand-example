import React, { useState } from "react";
import { useStore } from "../store";

const TodoList = () => {
  const [addTodoValue, setAddTodoValue] = useState("");

  const { todos, addTodo, deleteTodo } = useStore((state) => ({
    todos: state.todos,
    addTodo: state.addTodo,
    deleteTodo: state.deleteTodo,
  }));

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (addTodoValue) {
      addTodo(addTodoValue);
    }
    setAddTodoValue("");
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };
  return (
    <div>
      <h3>Todo List</h3>
      <div>
        <form onSubmit={handleAddTodo}>
          <input
            value={addTodoValue}
            onChange={(e) => setAddTodoValue(e.target.value)}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
      <div>
        <h4>Todos</h4>
        <div>
          {todos.map((todo) => (
            <p>
              {todo.title}{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => handleDeleteTodo(todo.id)}
              >
                {" "}
                X
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
