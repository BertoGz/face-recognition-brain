import React from "react";

const FaceRecognition = ({ boxValues, imgUrl }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div className="absolute mt2" style={{ maxWidth: "40%" }}>
          <img id="aiImage" src={imgUrl} alt={""} />
          {boxValues && (
            <div
              style={{
                top: boxValues.topRow,
                right: boxValues.rightCol,
                bottom: boxValues.bottomRow,
                left: boxValues.leftCol,
                position: "absolute",
                boxShadow: "0px 0px 0px 3px red",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <p> Face Detected</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
