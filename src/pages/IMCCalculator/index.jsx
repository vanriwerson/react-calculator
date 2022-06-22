import React, { Component } from 'react';
import IMCForm from '../../components/IMCForm';
import IMCTable from '../../components/IMCTable';
import './index.css';

export default class IMCCalculator extends Component {
  render () {
    return (
      <article className="imc-calculator-container">
        <h1>Calculadora de IMC</h1>
        <h4>Bora cuidar da saúde?</h4>
        <p>O cálculo do IMC (Índice de Massa Corporal) ajuda a definir se você é pessoa portadora de obesidade e qual o grau dela.</p>
        <p>Para fazer esse cálculo, basta informar abaixo seu peso (em quilos) e sua altura (em metros).</p>
        <IMCForm />
        <IMCTable />
      </article>
    );
  }
}
