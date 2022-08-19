import React from "react";
import { useState } from "react";
import { simplifyExpression } from "./calculatorLogic";
import Button from "../../components/Button";
import Display from "../../components/Display";
import "./index.css";

const RegularCalculator = () => {
  const generics = [
    "AC",
    "(",
    ")",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "←",
    "0",
    ".",
  ];
  const operators = ["/", "*", "-", "+", "="];

  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(0);

  const clearDisplay = () => {
    setExpression("");
    setResult(0);
  };

  const backSpace = () => {
    setExpression(expression.substring(0, expression.length - 1));
  };

  const actualizeDisplay = (newInput) => {
    setExpression((prev) => prev + newInput);
    const lastInput = expression.substring(expression.length - 1);

    const signs = ["/", "*", "-", "+", "."];
    const isSign = (input) => signs.some((operator) => operator === input);

    if (isSign(lastInput) && isSign(newInput)) {
      setExpression(expression);
    }
  };

  const calculateExpression = () => {
    setResult(simplifyExpression(expression));
  };

  const getInputs = ({ target: { innerText } }) => {
    switch (innerText) {
      case "AC":
        clearDisplay();
        break;

      case "←":
        backSpace();
        break;

      case "=":
        calculateExpression();
        break;

      default:
        actualizeDisplay(innerText);
        break;
    }
  };

  return (
    <main>
      <h1>Calculadora Regular</h1>
      <div className="calculator-container">
        <Display expression={expression} result={result.toString()} />
        <div className="generics-wrapper">
          {generics.map((generic, i) => (
            <Button
              key={i}
              label={generic}
              additionalClassName="number"
              onClickCallback={(e) => getInputs(e)}
            />
          ))}
        </div>
        <div className="operators-wrapper">
          {operators.map((operator, i) => (
            <Button
              key={i}
              label={operator}
              additionalClassName="operator"
              onClickCallback={(e) => getInputs(e)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default RegularCalculator;
