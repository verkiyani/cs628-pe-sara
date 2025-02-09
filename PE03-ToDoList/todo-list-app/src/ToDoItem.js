import React from 'react';

export default function ToDoItem({ task, onDelete }) {
  return (
    <div className="todo-item">
      <span>{task}</span>
      <button className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
