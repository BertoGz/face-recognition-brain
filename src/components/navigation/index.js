import React from "react";

const Navigation = ({ route, onSignOut }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      {route !== "signin" && (
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

export default Navigation;
