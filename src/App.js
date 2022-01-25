import React, { useState } from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Particles from "./Components/Particles";
import Register from "./Containers/Register";
import Home from "./Containers/Home";
const App = () => {
  const [userState, setUserState] = useState(null);
  const [navigationState, setNavigationState] = useState("signin");
  const navigation = {
    current: navigationState,
    setState: (routeName) => setNavigationState(routeName),
  };
  const user = {
    current: userState,
    setState: (state) => setUserState(state),
  };

  const clearStates = () => {
    user.setState(null);
    navigation.setState("signin");
  };
  const NavigationRoutes = () => {
    switch (navigation.current) {
      case "signin":
        return <Register {...{ navigation, user }} />;
      case "home":
        return <Home {...{ user }} />;
    }
  };

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <div className="App">
        {true && <Particles />}
        <NavigationBar
          {...{ navigation, user }}
          onSignOut={() => {
            clearStates();
          }}
        />
        {NavigationRoutes()}
      </div>
    </>
  );
};

export default App;
