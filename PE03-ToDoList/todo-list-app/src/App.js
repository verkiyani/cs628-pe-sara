import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>Sara ToDo List App</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task description"
        />
        <button onClick={addTodo}>Add Task</button>
      </div>
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
