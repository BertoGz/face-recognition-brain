import React from "react";
import Tilt from "react-tilt";
import brain from "../../files/brain.png";
import "./Logo.css";
const Logo = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 150, width: 150, backgroundColor: "rgb(200,100,200)" }}
      >
        <div className="Tilt-inner pa3">
          <img alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
