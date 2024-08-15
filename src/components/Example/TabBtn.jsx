import React from "react";

const TabBtn = ({ children, isClicked, ...props }) => {
  return (
    <li>
      <button className={isClicked ? "active" : ""} {...props}>
        {children}{" "}
      </button>
    </li>
  );
};

export default TabBtn;
