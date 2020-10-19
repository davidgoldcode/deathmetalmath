import React from "react";
import Results from "./Results";
import Keypad from "./Keypad";

const Calculator = ({ results, clickHandler, classChange }) => {
  return (
    <div
      className="full-calculator "
      id={`${classChange ? "calc-animation" : "full-calculator-container"}`}
    >
      <Results results={results} />
      <Keypad clickHandler={clickHandler} />
    </div>
  );
};

export default Calculator;
