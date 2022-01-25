import React, { useEffect, useState } from "react";
import { requestUserSignin, requestUserRegister } from "../../Requests";
import {
  Center,
  Box,
  Heading,
  Input,
  Text,
  Button,
  Pressable,
} from "native-base";
// test log
const buttonStyles = {
  mt: "10px",
};
const inputStyles = {
  size: "xl",
  color: "white",
};
const noEmailError = "Please enter a email";
const invalidEmailError = "Please enter a valid email";
const noPasswordError = "Please enter a password";
const invalidPasswordError = "Enter a password at least 8 characters long";
const credentialNotRecognizedError = "credentials not recognized";

const SigninRegisterForm = ({ props }) => {
  const { navigation, user } = props || {};
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [credentialsError, setCredentialsError] = useState("");
  const goodPassword = password?.length >= 8;
  const goodEmail = email?.length > 0;

  const onSubmitSignin = async () => {
    if (!email) {
      setEmailError(noEmailError);
    }
    if (!password) {
      setPasswordError(noPasswordError);
    }
    if (!email || !password) {
      return 0;
    }
    const response = await requestUserSignin({ email, password });
    if (response.status > 0) {
      user.setState(response.data);
      navigation.setState("home");
    } else {
      setCredentialsError(credentialNotRecognizedError);
    }
  };
  const onSubmitRegister = async () => {
    setPasswordError("");
    setEmailError("");
    if (!goodPassword || !goodEmail) {
      if (password?.length === 0) {
        setPasswordError(noPasswordError);
      } else if (!goodPassword) {
        setPasswordError(invalidPasswordError);
      }

      if (email?.length === 0) {
        setEmailError(noEmailError);
      } else if (!goodEmail) {
        setEmailError(invalidEmailError);
      }
      return 0;
    }

    if (goodPassword && goodEmail) {
      const response = await requestUserRegister({
        email,
        password,
        name,
      });
      if (response.status > 0) {
        navigation.setState("home");
        user.setState(response.data);
      } else {
        setCredentialsError(response.message);
        console.log("error at onSubmitRegister", response);
      }
    }
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
    setCredentialsError("");
  };

  return (
    <Center pt="20px">
      <Box shadow="6" p="10" bgColor={"rgba(0,0,0,.1)"}>
        <Heading color="white"> Face Recognition Brain</Heading>

        <Box maxW="400px" pt="3">
          {isRegistering && (
            <>
              <Text color="white">Full Name</Text>
              <Input
                {...inputStyles}
                type="text"
                placeholder="fullname"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </>
          )}
          <Text alignSelf={"flex-start"} color="white">
            Email
          </Text>
          <Input
            {...inputStyles}
            type="email"
            placeholder="email-address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {!!emailError && <Text style={{ color: "red" }}>{emailError}</Text>}
          <Text alignSelf={"flex-start"} color="white">
            Password
          </Text>
          <Input
            {...inputStyles}
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!!passwordError && (
            <Text style={{ color: "red" }}>{passwordError}</Text>
          )}
          {!!credentialsError && (
            <Text style={{ color: "red" }}>{credentialsError}</Text>
          )}
        </Box>

        {!isRegistering && (
          <Box maxW="400px">
            <Button
              {...buttonStyles}
              style={{ backgroundColor: "teal" }}
              onPress={onSubmitSignin}
            >
              Sign in
            </Button>

            <Button
              {...buttonStyles}
              style={{ backgroundColor: "rgb(150,120,50)" }}
              onPress={() => {
                setIsRegistering(true);
                clearErrors();
              }}
            >
              Sign-up
            </Button>
          </Box>
        )}
        {isRegistering && (
          <Box maxW="400px">
            <Button
              {...buttonStyles}
              style={{ backgroundColor: "teal" }}
              onPress={onSubmitRegister}
            >
              Sign-up
            </Button>

            <Button
              {...buttonStyles}
              style={{ backgroundColor: "rgb(150,120,50)" }}
              onPress={() => {
                setIsRegistering(false);
                clearErrors();
              }}
            >
              Already a user? Sign-in
            </Button>
          </Box>
        )}
        <Pressable>
          <Text color="white" fontWeight={"bold"} pt="4">
            Continue without registering
          </Text>
        </Pressable>
      </Box>
    </Center>
  );
};
export default SigninRegisterForm;
