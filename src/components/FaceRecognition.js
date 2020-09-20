import React from "react";

const FaceRecognition = ({ imgUrl }) => {
  return (
    <div
      style={{
        maxWidth: "80%",
      }}
    >
      <img id="aiImage" src={imgUrl} alt={""} />
    </div>
  );
};

export default FaceRecognition;
