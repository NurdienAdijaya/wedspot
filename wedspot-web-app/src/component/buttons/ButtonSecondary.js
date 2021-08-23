import React from "react";
import "./Button.css";

const ButtonSecondary = ({ width, content = "Content", onClick }) => {
  return (
    <button
      className="secondary"
      style={{
        width: `${width}`,
      }}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default ButtonSecondary;
