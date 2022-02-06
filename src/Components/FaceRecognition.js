import { Center, Box, Text } from "native-base";
import React from "react";

const FaceRecognition = ({ boxValues, imgUrl }) => {
  return (
    <Center>
      <Center flex={1} display={"flex"}>
        <img id="aiImage" src={imgUrl} alt={""} />
        {boxValues && (
          <Box
            style={{
              top: boxValues.topRow,
              right: boxValues.rightCol,
              bottom: boxValues.bottomRow,
              left: boxValues.leftCol,
              position: "absolute",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              cursor: "pointer",
            }}
            bgColor={"rgba(255,255,255,.25)"}
            borderRadius={"full"}
          >
            <Text color={"light.100"} fontWeight={"bold"}>
              {" "}
              Face Detected
            </Text>
          </Box>
        )}
      </Center>
    </Center>
  );
};

export default FaceRecognition;
