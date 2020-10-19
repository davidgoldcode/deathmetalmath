import React, { useEffect, useState } from "react";
import { evaluate } from "../node_modules/mathjs";
import "./App.css";
import Header from "./Components/Header";
import Calculator from "./Components/Calculator";
import Explosion from "./Components/Explosion";
import ReactAudioPlayer from "react-audio-player";
import Bodies from "./assets/audio/Bodies.mp3";
import {
  hasConsecutiveOps,
  isOp,
  isPercentage,
  startsWithZero,
  endsWithDot,
  hasDot,
  endsWithOp,
  lastNumber,
} from "./helpers/regex";

function App() {
  const [results, setResults] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [classChange, setClassChange] = useState(false);

  useEffect(() => {
    setResults(clicked);
    // console.log(`%c Rock \n On \n 🤘🤘🤘 `, "color: red; font-size: 100px; ");
  }, [clicked]);

  const calculate = (math) => {
    const value = evaluate(math);
    setClicked(Number(value));
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
        let addPercentage = button.match(lastNumber);
        button = button.replace(lastNumber, (addPercentage / 100).toFixed(2));
        setClicked(button);
        break;
      default:
        if (isOp.test(value) && isOp.test(button)) {
          setClicked(button.replace(isOp, value));
          break;
        } else if (!isOp.test(button) && startsWithZero.test(button)) {
          console.log("here!!!");
          setClicked(`${clicked === 0 ? "" : clicked}${value}`);
          break;
        } else if (
          isOp.test(value) &&
          hasConsecutiveOps.test(String(results))
        ) {
          button = Number(button.replace(hasConsecutiveOps, value));
          setClicked(button);
          break;
        } else {
          setClicked(`${clicked}${value}`);
          break;
        }
    }
  };

  return (
    <>
      <Header />
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
