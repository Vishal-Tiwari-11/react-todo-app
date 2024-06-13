import React from "react";

function TodoItem({ todo, index, toggleCompletion, deleteTodo }) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <span className="todo-number">{index + 1}. </span>
      {todo.text}
      <button
        className="complete-button"
        onClick={() => toggleCompletion(index)}
      >
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
