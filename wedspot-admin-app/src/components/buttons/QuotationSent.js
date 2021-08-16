import React from "react";

const QuotationSent = ({ width, content = "content", onClick }) => {
  return (
    <button
      className="pill-sent"
      style={{
        width: `${width}`,
      }}
      onClick={(event) => onClick(event)}
    >
      {content}
    </button>
  );
};

export default QuotationSent;
