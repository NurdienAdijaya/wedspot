import React from "react";
import "./Button.css";

const QuotationNew = ({
  width,
  content = "content",
  onClick,
  margin,
  fontSize = "10px",
}) => {
  return (
    <button
      className="pill-new"
      style={{
        width: `${width}`,
        margin: `${margin}`,
        fontSize: `${fontSize}`,
      }}
      onClick={(event) => onClick(event)}
    >
      {content}
    </button>
  );
};

export default QuotationNew;
