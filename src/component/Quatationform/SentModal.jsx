import React from "react";
import NoresultHand from "../noresult/NoresultHand";
import Hand from "../asset/NoHand.png";
import Card from "@material-ui/core/Card";

const SentModal = ({ title = "Request Sent!", description = "Please Try" }) => {
  return (
    <Card>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={Hand}
          alt="No Result"
          style={{
            width: "320px",
            margin: "24px",
          }}
        ></img>
        <h3 style={{ fontSize: "16px", margin: "4px", fontWeight: 600 }}>
          {title}
        </h3>
        <p style={{ fontSize: "16px", margin: "4px" }}>{description}</p>
        <button>View My Quotation Request</button>
      </div>
    </Card>
  );
};

export default SentModal;
