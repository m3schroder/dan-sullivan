import React from "react";

const SplashPage = () => {
  return (
    <div style={Styles.container}>
      <h1 style={Styles.text}>Miraculous Carpet Cleaning</h1>
    </div>
  );
};

const Styles = {
  container: {
    display: "flex",
    justifyContent: "Center",
    alignItems: "Center",
    width: "100vw",
    height: "100vh",
  },
  text: {
    fontSize: "4rem",
    fontWeight: "600",
    textAlign: "center",
  },
};

export default SplashPage;
