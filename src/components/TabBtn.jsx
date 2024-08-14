import React from "react";

const TabBtn = ({ children, onClick, isClicked }) => {
  return (
    <li>
      <button className={isClicked ? "active" : ""} onClick={onClick}>
        {children}{" "}
      </button>
    </li>
  );
};

export default TabBtn;
