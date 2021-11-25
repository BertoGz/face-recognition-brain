import React, { useState } from "react";
import Logo from "../Logo";
import "./ImageLinkForm.css";
import Rank from "../Rank/Rank";
const ImageLinkForm = ({ handleOnSubmit }) => {
  const [input, setInput] = useState("");
  const onInputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <div
        className="divv"
        style={{ display: "flex", flexDirection: "column" }}
      >
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
          {
            "This Magic Brain will detect faces in your pictures, give it a shot"
          }
        </p>
        <div>
          <div className="form center pa4 br3 shadow-1">
            <input
              className="f4 pa2 w-70 center"
              type="text"
              onChange={onInputChange}
            />
            <button
              className="w-3 0 grow f4 link ph3 pv2 dib white bg-light-purple"
              style={{ borderRadius: 10 }}
              onClick={() => handleOnSubmit(input)}
            >
              Detect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
