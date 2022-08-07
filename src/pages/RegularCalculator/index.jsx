import React from 'react';
import { useState } from 'react';
import Button from '../../components/Button';
import Display from '../../components/Display';
import './index.css';

const RegularCalculator = () => {
  const generics = ['AC', '()', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '+/-', '0', '.'];
  const operators = ['/', '*', '-', '+', '='];

  const [expression, setExpression] = useState('');
  const [isOperator, setIsOperator] = useState(false);
  const [result, setResult] = useState(0);

  const clearDisplay = () => {
    setExpression('');
    setResult(0);
  };

  const actualizeDisplay = (newInput) => {
    setExpression((prev) => prev + newInput );
  };

  const calculateExpression = () => {

  };

  const getInputs = ({ target: { innerText } }) => {
    switch (innerText) {
      case 'AC':
        clearDisplay();
        break;

      case '=':
        calculateExpression();
        break;
    
      default:
        actualizeDisplay(innerText);
        break;
    }
  }

  return (
    <main>
      <h1>Calculadora Silmples</h1>
      <div className="calculator-container">
        <Display
          expression={ expression }
          result={ result }
        />
        <div className="generics-wrapper">
          {generics.map((generic, i) => (
            <Button 
              key={ i }
              label={ generic }
              additionalClassName="number"
              onClickCallback={ (e) => getInputs(e) }
            />
          ))}
        </div>
        <div className="operators-wrapper">
          {operators.map((operator, i) => (
              <Button 
                key={ i }
                label={ operator }
                additionalClassName="operator"
                onClickCallback={ (e) => console.log(e.target) }
              />
            ))}
        </div>
      </div>
    </main>
  );
}

export default RegularCalculator;
