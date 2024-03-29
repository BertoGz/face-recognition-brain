import React from "react";
const Rank = ({ user }) => {
  const { name, entries } = user || {};
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
      <div className="white f3">{`${name}, your current rank is...`}</div>
      <div className="white f1">{entries}</div>
    </div>
  );
};

export default Rank;
