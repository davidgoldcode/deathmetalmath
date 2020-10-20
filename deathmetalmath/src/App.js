import React, { useEffect, useState } from "react";
import { evaluate } from "../node_modules/mathjs";
import "./App.css";
import Header from "./Components/Header";
import Calculator from "./Components/Calculator";
import Explosion from "./Components/Explosion";
import ReactAudioPlayer from "react-audio-player";
import Bodies from "./assets/audio/Bodies.mp3";
import {
  isMathOperator,
  startsWithZero,
  endsWithDot,
  hasDot,
  lastNumber,
  sixDecimals,
} from "./helpers/regex";

function App() {
  const [results, setResults] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [classChange, setClassChange] = useState(false);

  useEffect(() => {
    setResults(clicked);
  }, [clicked]);

  const calculate = (math) => {
    const value = evaluate(math);
    sixDecimals.test(value)
      ? setClicked(Number(value.toFixed(6)))
      : setClicked(Number(value));
  };

  const reset = () => {
    setClicked(0);
  };

  const startMusic = (evt) => {
    evt.preventDefault();
    setClassChange(1);
  };

  const clickHandler = (evt) => {
    evt.preventDefault();
    const { name, value } = evt.currentTarget;
    let button = String(clicked);

    switch (value) {
      case "AC":
        reset();
        break;
      case "=":
        calculate(clicked);
        break;
      case "+/-":
        button = button.replace(lastNumber, -1 * button.match(lastNumber));
        setClicked(`${button}`);
        break;
      case ".":
        if (endsWithDot.test(button) || hasDot.test(button)) {
          break;
        } else {
          setClicked(`${clicked}${value}`);
          break;
        }
      case "%":
        let last = button.match(lastNumber);
        button = button.replace(lastNumber, (last / 100).toFixed(2));
        setClicked(button);
        break;
      default:
        // test if the equation already ends with a math operator
        if (isMathOperator.test(value) && isMathOperator.test(button)) {
          setClicked(button.replace(isMathOperator, value));
          break;
        } else if (
          !isMathOperator.test(button) &&
          startsWithZero.test(button)
        ) {
          setClicked(`${clicked === 0 ? "" : clicked}${value}`);
          break;
        } else {
          setClicked(`${clicked}${value}`);
          break;
        }
    }
  };

  console.log(`%c Rock \n On \n 🤘🤘🤘 `, "color: red; font-size: 100px; ");

  return (
    <>
      <Header classChange={classChange} />
      <Calculator
        results={results}
        clickHandler={clickHandler}
        classChange={classChange}
      />
      <ReactAudioPlayer
        src={Bodies}
        autoPlay={false}
        onPlay={startMusic}
        controls
      />
      <Explosion classChange={classChange} />
    </>
  );
}

export default App;
