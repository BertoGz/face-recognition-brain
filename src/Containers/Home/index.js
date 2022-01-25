import React, { useEffect, useState } from "react";
import FaceRecognition from "../../Components/FaceRecognition";
import ImageLinkForm from "../../Components/ImageLinkForm";
import { clarifai, increaseEntry } from "../../Requests";

const Home = (props) => {
  const { user } = props || {};

  const [imgUrl, setImgUrl] = useState("");
  const [boxValues, setBoxValues] = useState(null);

  const handleOnSubmit = async (input) => {
    setImgUrl(input);
    clarifai({ url: input })
      .then(async (response) => {
        if (response.data) {
          if (user?.current?.id) {
            // go here if user is real
            const res = await increaseEntry({ id: user.current?.id });
            if (res.status > 0) {
              user.setState({ ...user.current, entries: res.data });
              console.log("helo!");
            }
          } else {
            // go here if user is guest
            user.setState({
              ...user.current,
              entries: user?.current?.entries + 1,
            });
          }
        }

        calcFaceLocation(response.data);
      })
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
    <>
      <ImageLinkForm {...{ user }} handleOnSubmit={handleOnSubmit} />
      <FaceRecognition boxValues={boxValues} imgUrl={imgUrl} />
    </>
  );
};
export default Home;
