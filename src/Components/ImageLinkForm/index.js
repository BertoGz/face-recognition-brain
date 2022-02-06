import React, { useState } from "react";
import Logo from "../Logo";
import "./ImageLinkForm.css";
import Rank from "../Rank";
import { Heading, Box, Button, HStack, Input } from "native-base";
const inputStyles = {
  minW: "100px",
  flexGrow: 1,
  placeholder: "Enter image URL",
  placeholderTextColor: "white",

  bgColor: "rgb(100,150,100)",
  color: "white",
  size: "xl",
};

const ImageLinkForm = ({ user, handleOnSubmit }) => {
  const [input, setInput] = useState("");
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <Box>
      <Box alignItems={"flex-start"}>
        <Rank {...{ user }} />
      </Box>
      <Logo />

      <Heading size="md" color={"white"} py="3">
        This Magic Brain will detect faces in your pictures, give it a shot
      </Heading>
      <HStack px="10%">
        <Input {...inputStyles} onChange={onInputChange} />
        <Button size="lg" onPress={() => handleOnSubmit(input)}>
          Detect image
        </Button>
      </HStack>
    </Box>
  );
};

export default ImageLinkForm;
