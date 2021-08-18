import React from "react";

const QuotationNew = ({ width, content = "content", onClick }) => {
  return (
    <button
      className="pill-new"
      style={{
        width: `${width}`,
      }}
      onClick={(event) => onClick(event)}
    >
      {content}
    </button>
  );
};

export default QuotationNew;
