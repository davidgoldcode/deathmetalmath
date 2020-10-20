import React from "react";
import rocknrollgif from "../assets/rocknrollgif.gif";

const Header = ({ classChange }) => {
  return (
    <div className="header-container">
      <h1 className="header-title">Death Metal Math</h1>
      <img
        src={rocknrollgif}
        alt="rocknroll gif"
        id={`${classChange ? "removeGif" : "gif"}`}
      />
    </div>
  );
};

export default Header;
