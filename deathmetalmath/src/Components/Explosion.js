import React from "react";
import explosion from "../assets/explosion.gif";

const Explosion = ({ classChange }) => {
  return (
    <>
      <img
        src={explosion}
        alt="video/mp4"
        id={`${classChange ? "fireball" : "preexplosion"}`}
      />
    </>
  );
};

export default Explosion;
