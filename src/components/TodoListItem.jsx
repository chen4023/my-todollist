import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "../styles/TodoListItem.css";

export default function TodoListItem({ todo, onToggle, onDelete }) {
  const { text, checked } = todo;

  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };
  return (
    <div className="list-container">
      <div className="todo">
        <input
          className="todo-box"
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
        />
        <div className="todo-text">{text}</div>
      </div>
      <div onClick={handleDelete}>
        <FaTrashAlt size="20px" color="#776B5D" />
      </div>
    </div>
  );
}
