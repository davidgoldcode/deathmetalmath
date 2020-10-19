import React from "react";
import rocknrollgif from "../assets/rocknrollgif.gif";

const Header = () => {
  return (
    <div className="header-container">
      <img src={rocknrollgif} alt="rocknroll gif" />
      <h1 className="header-title">Death Metal Math</h1>
    </div>
  );
};

export default Header;
