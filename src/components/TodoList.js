import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleCompletion, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleCompletion={toggleCompletion}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
