import React from "react";
import reactImg from "../assets/react-core-concepts.png";
import "./header.css";

const Header = () => {
  const reactDescription = ["Fundamental", "Core", "Crucial"];
  function genRandomInit(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const description = reactDescription[genRandomInit(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
