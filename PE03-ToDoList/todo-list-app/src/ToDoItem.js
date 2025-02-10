import React from 'react';

function ToDoItem({ text, onDelete }) {
  return (
    <div className="todo-item">
      <span>{text}</span>
      <button onClick={onDelete} className="delete-button">Delete</button>
    </div>
  );
}

export default ToDoItem;
