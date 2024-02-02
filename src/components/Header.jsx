import React from "react";
import { BsSunFill } from "react-icons/bs";
import "../styles/Header.css";

export default function Header({ setFilter }) {
  // const handleAchive = () => {
  //   onAchive();
  // };

  return (
    <header className="header">
      <BsSunFill size="35px" />
      <ul className="menu">
        <li>
          <button className="item" onClick={() => setFilter("all")}>
            All
          </button>
        </li>
        <li>
          <button className="item" onClick={() => setFilter("achive")}>
            Achive
          </button>
        </li>
        <li>
          <button className="item" onClick={() => setFilter("completed")}>
            Completed
          </button>
        </li>
      </ul>
    </header>
  );
}
