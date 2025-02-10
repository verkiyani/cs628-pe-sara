import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, deleteTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          text={todo}
          onDelete={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
}

export default ToDoList;
