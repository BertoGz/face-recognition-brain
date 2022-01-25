import { Pressable, Text } from "native-base";
import React from "react";

const NavigationBar = ({ navigation, user, onSignOut }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      {navigation.current !== "signin" && user?.current?.id && (
        <Pressable onPress={onSignOut} p="5">
          <Text fontSize={"xl"} color="white" underline>
            Sign out
          </Text>
        </Pressable>
      )}
      {navigation.current !== "signin" && !user?.current?.id && (
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
