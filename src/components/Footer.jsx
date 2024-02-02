import React, { useState } from "react";
import "../styles/Footer.css";

export default function Footer({ AddTodo }) {
  const [text, setText] = useState("");
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const handleAdd = () => {
    AddTodo(text);
    setText("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      handleAdd();
    }
  };
  return (
    <div className="footer">
      <input
        className="add-box"
        type="text"
        value={text}
        placeholder="Add Todo"
        onChange={onChangeText}
        onKeyDown={handleKeyPress}
      />
      <button className="add-btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
