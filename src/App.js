import React, { useState } from "react";
import "./App.css";
import Navigation from "./Components/navigation";
import ImageLinkForm from "./Components/imageLinkForm";
import FaceRecognition from "./Components/FaceRecognition";
import Particles from "./Components/Particles";
import { clarifai } from "./Utils/Requests";
import { FACE_DETECT_MODEL } from "clarifai";

const App = () => {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [boxValues, setBoxValues] = useState(null);

  const onInputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const handleOnSubmit = () => {
    setImgUrl(input);
    clarifai.models
      .predict(FACE_DETECT_MODEL, input)
      .then((response) => calcFaceLocation(response))
      .catch((error) => console.log(error));
  };

  const calcFaceLocation = (data) => {
    console.log(data.outputs[0].data.regions[0].region_info.bounding_box);
    let box = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("aiImage");
    const width = Number(image.width);
    const height = Number(image.height);
    setBoxValues({
      leftCol: box.left_col * width,
      topRow: box.top_row * height,
      rightCol: width - box.right_col * width,
      bottomRow: height - box.bottom_row * height,
    });
  };
  return (
    <div className="App">
      <Particles />
      <Navigation />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <ImageLinkForm
          onInputChange={onInputChange}
          handleOnSubmit={handleOnSubmit}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FaceRecognition boxValues={boxValues} imgUrl={imgUrl} />
      </div>
    </div>
  );
};

export default App;
