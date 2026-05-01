import React from "react";

function HeroSection(props) {
  const heroStyles = {
    backgroundImage: `url("/hero-section-image.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "black",
    minHeight: "40vh",
    position: "relative",
  };

  const overlayStyles = {
    backgroundColor: "rgba(78, 145, 197, 0.8)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  };

  const contentStyles = {
    position: "relative",
    zIndex: 2,
  };

  return (
    <div
      style={heroStyles}
      className="d-flex align-items-center justify-content-center text-center">
      <div style={overlayStyles}></div>
      <div style={contentStyles}>
        <h1 className="display-3 fw-bold font-aref-semi-bold">
          {props.title || "Default Title"}
        </h1>
        <p className="fs-5">{props.description || "Default Description"}</p>
      </div>
    </div>
  );
}

export default HeroSection;
