import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const filters = ["all", "achive", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const AddTodo = (text) => {
    const newTodo = [...todo, { id: todo.length, text, checked: false }];
    setTodo(newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodo));
  };

  const onToggle = (id) => {
    const updateTodo = todo.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodo(updateTodo);
    localStorage.setItem("todos", JSON.stringify(updateTodo));
  };

  const onDelete = (id) => {
    const deleteTodo = todo.filter((todo) => todo.id !== id);
    setTodo(deleteTodo);
    localStorage.setItem("todos", JSON.stringify(deleteTodo));
  };

  return (
    <div className="container">
      <div className="todo-container">
        <Header setFilter={setFilter} />
        <TodoList
          todos={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          filter={filter}
        />
        <Footer AddTodo={AddTodo} />
      </div>
    </div>
  );
}

export default App;
