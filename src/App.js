import React, { useMemo } from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Particles from "./Components/Particles";
import Register from "./Containers/Register";
import Home from "./Containers/Home";
import { resetUserState } from "./Redux/Actions/user";
import { useDispatch, useSelector } from "react-redux";
import { resetNavigationState } from "./Redux/Actions/navigation";
const App = () => {
  const dispatch = useDispatch();
  const { route } = useSelector((state) => state.navigation);

  const clearStates = () => {
    dispatch(resetUserState());
    dispatch(resetNavigationState());
  };
  const NavigationRoutes = useMemo(() => {
    switch (route) {
      case "signin":
        return <Register />;
      case "home":
        return <Home />;
    }
  }, [route]);

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <div className="App">
        <Particles />
        <NavigationBar
          {...{ route }}
          onSignOut={() => {
            clearStates();
          }}
        />
        {NavigationRoutes}
      </div>
    </>
  );
};

export default App;
