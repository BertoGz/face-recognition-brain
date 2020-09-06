import React from "react";
const Rank = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "rgba(10,10,10,.2)",
        borderRadius: 20,
        padding: 10,
      }}
    >
      <div className="white f3">{"Berto, your current rank is..."}</div>
      <div className="white f1">{"#5"}</div>
    </div>
  );
};

export default Rank;
