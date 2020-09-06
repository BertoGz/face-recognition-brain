import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";

import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Particles from "react-particles-js";

const particleOptions = {
  particles: {
    number: {
      value: 130,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};
function App() {
  return (
    <div className="App">
      <Particles
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: -1,
        }}
        params={particleOptions}
      />
      <Navigation />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <ImageLinkForm />
      </div>

      {/*** 
      <FaceRecognition/>*/}
    </div>
  );
}

export default App;
