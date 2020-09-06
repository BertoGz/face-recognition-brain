import React from "react";
import Logo from "../Logo/Logo";
import "./ImageLinkForm.css";
import Rank from "../Rank/Rank";
const ImageLinkForm = () => {
  return (
    <div className="divv" style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingLeft: 250,
        }}
      >
        <Logo />
        <Rank />
      </div>
      <p className="f3" style={{ fontFamily: "monospace" }}>
        {"This Magic Brain will detect faces in your pictures, give it a shot"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            style={{ borderRadius: 10 }}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
