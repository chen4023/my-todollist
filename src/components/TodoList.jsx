import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, onToggle, onDelete, filter }) {
  if (!todos || todos.length === 0) {
    return <div></div>;
  }
  const filtered = getFilteredItems(todos, filter);

  return (
    <div
      style={{ height: "600px", padding: "30px 20px", boxSizing: "border-box" }}
    >
      {filtered.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
function getFilteredItems(todo, filter) {
  if (filter === "all") {
    return todo;
  } else if (filter === "achive") {
    return todo.filter((t) => t.checked === false);
  }
  return todo.filter((t) => t.checked === true);
}
