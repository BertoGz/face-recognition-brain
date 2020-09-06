import React from "react";
const Rank = () => {
  return (
    <div
      style={{
        width: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: "monospace",
      }}
    >
      <div className="white f3">{"Berto, your current rank is..."}</div>
      <div className="white f1">{"#5"}</div>
    </div>
  );
};

export default Rank;
