import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Home extends Component {
  render () {
    return (
      <article className="home">
        <h1>Boas-vindas!</h1>
        <p>Escolha uma calculadora e divirta-se!</p>
        <ul className="navigation">
          <li><Link to="/imc-calculator">Calculadora de IMC</Link></li>
          <li><Link to="/gestational-age-calculator">Calculadora de idade gestacional</Link></li>
          <li><Link to="/regular-calculator">Calculadora simples</Link></li>
        </ul>
      </article>
    );
  }
}
