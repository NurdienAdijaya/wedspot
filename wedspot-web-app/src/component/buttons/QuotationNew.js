import React from "react";
import "./Button.css";

const QuotationNew = ({ width, content = "content", onClick, margin }) => {
  return (
    <button
      className="pill-new"
      style={{
        width: `${width}`,
        margin: `${margin}`,
      }}
      onClick={(event) => onClick(event)}
    >
      {content}
    </button>
  );
};

export default QuotationNew;
