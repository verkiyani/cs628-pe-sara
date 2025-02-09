import React, { useState } from "react";
import "./App.css";


function ToDoItem({ task, onDelete }) {
  return (
    <div className="todo-item">
      <span>{task}</span>
      <button className="delete-btn" onClick={onDelete}>Delete</button>
    </div>
  );
}


function ToDoListApp() {
  const [toDoList, setToDoList] = useState([]); 
  const [task, setTask] = useState(""); 
  const addTask = () => {
    if (task.trim()) {
      setToDoList([...toDoList, task]);
      setTask("");
    }
  };


  const deleteTask = (index) => {
    const updatedList = toDoList.filter((_, i) => i !== index);
    setToDoList(updatedList);
  };

  return (
    <div className="todo-list-app">
      <h1>Sara ToDo List App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task description"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="add-btn" onClick={addTask}>Add Task</button>
      </div>
      <div className="todo-container">
        {toDoList.map((task, index) => (
          <ToDoItem
            key={index}
            task={task}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoListApp;
