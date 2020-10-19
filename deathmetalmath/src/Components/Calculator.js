import React from "react";
import Results from "./Results";
import Keypad from "./Keypad";
import ReactAudioPlayer from "react-audio-player";
import Bodies from "../assets/audio/Bodies.mp3";
import silence from "../assets/audio/silence.mp3";

const Calculator = ({ results, clickHandler }) => {
  return (
    <div className="full-calculator-container">
      <Results results={results} />
      <Keypad clickHandler={clickHandler} />
      {/* <ReactAudioPlayer src={Bodies} autoPlay={true} controls /> */}
    </div>
  );
};

export default Calculator;
