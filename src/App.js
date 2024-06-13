import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleCompletion = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>React To-Do App</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTodo} disabled={!task.trim()}>
        Add Task
      </button>
      <TodoList
        todos={todos}
        toggleCompletion={toggleCompletion}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
