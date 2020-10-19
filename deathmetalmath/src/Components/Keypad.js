import React from "react";
import Button from "@material-ui/core/Button";

const buttons = {
  reset: "AC",
  makeNegative: "+/-",
  percentage: "%",
  divide: "/",
  seven: "7",
  eight: "8",
  nine: "9",
  multiply: "*",
  four: "4",
  five: "5",
  six: "6",
  minus: "-",
  one: "1",
  two: "2",
  three: "3",
  add: "+",
  zero: "0",
  period: ".",
  equal: "=",
};

const Keypad = ({ clickHandler }) => {
  return (
    <div className="calculatorDiv">
      {Object.entries(buttons).map((item, index) => (
        <Button
          className={`calcButtons ${item[0]}`}
          onClick={clickHandler}
          key={index}
          name={item[1]}
          value={item[1]}
          variant="contained"
          color="secondary"
        >
          {item[1]}
        </Button>
      ))}
    </div>
  );
};

export default Keypad;
