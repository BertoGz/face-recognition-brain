import React, { useState } from "react";
import "./App.css";
import { FACE_DETECT_MODEL } from "clarifai";
import SigninRegisterForm from "./Components/SigninRegisterForm";
import Navigation from "./Components/navigation";
import ImageLinkForm from "./Components/imageLinkForm";
import FaceRecognition from "./Components/FaceRecognition";
import Particles from "./Components/Particles";
import { clarifai } from "./Utils/Requests";

const App = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [boxValues, setBoxValues] = useState(null);
  const [route, setRoute] = useState("signin");
  const handleOnSubmit = (input) => {
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
      <Navigation navigate={setRoute} {...{ route }} />
      {route === "signin" ? (
        <SigninRegisterForm navigate={setRoute} {...{ route }} />
      ) : (
        <>
          <ImageLinkForm handleOnSubmit={handleOnSubmit} />
          <FaceRecognition boxValues={boxValues} imgUrl={imgUrl} />
        </>
      )}
    </div>
  );
};

export default App;
