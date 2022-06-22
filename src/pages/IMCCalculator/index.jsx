import React, { Component } from 'react';
import IMCForm from '../../components/IMCForm';
import IMCTable from '../../components/IMCTable';
import './index.css';

export default class IMCCalculator extends Component {
  state = {
    weight: '',
    height: '',
    IMC: '',
    isCalculated: false,
  }
  
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  convertToFloat = (str) => {
    const replaceComma = str.replace(',', '.');
    return Number(replaceComma);
  }

  convertToString = (num) => {
    const roundedNum = num.toFixed(1).toString()
    const string = roundedNum.replace('.', ',');
    return string;
  }
  
  calculateIMC = () => {
    const { weight, height } = this.state;
    const convertedWeight = this.convertToFloat(weight);
    const convertedHeight = this.convertToFloat(height);

    const calc = convertedWeight / (convertedHeight * convertedHeight);
    const IMC = this.convertToString(calc);
    
    this.setState({
      IMC,
      isCalculated: true,
    })
  }

  resetState = () => {
    this.setState({
      weight: '',
      height: '',
      IMC: '',
      isCalculated: false,
    });
  }

  render () {
    const { weight, height, IMC, isCalculated } = this.state;

    return (
      <article className="imc-calculator-container">
        <h1>Calculadora de IMC</h1>
        <h4>Bora cuidar da saúde?</h4>
        <p>O cálculo do IMC (Índice de Massa Corporal) ajuda a definir se você é pessoa portadora de obesidade e qual o grau dela.</p>
        <p>Para fazer esse cálculo, basta informar abaixo seu peso (em quilos) e sua altura (em metros).</p>
        {!isCalculated && (
          <IMCForm
            weight={ weight }
            height={ height }
            onInputChange={ this.handleChange }
            onButtonClick={ this.calculateIMC }
          />
        )}
        {isCalculated && (
          <div className="answer">
            <p>Seu IMC é <span className="imc-display">{ IMC }</span>. Vamos ver como você está?</p>
            <IMCTable />
            <button
              onClick={ this.resetState }
            >
              Calcular novamente
            </button>
          </div>
        )}
      </article>
    );
  }
}
