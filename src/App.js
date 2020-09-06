import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
function App() {
  return (
    <div className="App">
      <Navigation />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Logo />
        <Rank />
      </div>
      <ImageLinkForm />
      {/*** 
      <FaceRecognition/>*/}
    </div>
  );
}

export default App;
