import { Pressable, Text } from "native-base";
import React from "react";
import { useSelector } from "react-redux";

const NavigationBar = ({ route, onSignOut }) => {
  const { user } = useSelector((state) => state);
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      {route !== "signin" && user?.id && (
        <Pressable onPress={onSignOut} p="5">
          <Text fontSize={"xl"} color="white" underline>
            Sign out
          </Text>
        </Pressable>
      )}
      {route !== "signin" && !user?.id && (
        <Pressable onPress={onSignOut} p="5">
          <Text fontSize={"xl"} color="white" underline>
            Sign up to keep your score!
          </Text>
        </Pressable>
      )}
    </nav>
  );
};

export default NavigationBar;
