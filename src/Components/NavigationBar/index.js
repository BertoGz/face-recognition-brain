import React from "react";

const NavigationBar = ({ navigation, onSignOut }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      {navigation.current !== "signin" && (
        <p
          onClick={onSignOut}
          className="f4  link dim black underline pa3 pointer"
        >
          Sign out
        </p>
      )}
    </nav>
  );
};

export default NavigationBar;
