import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Home extends Component {
  render () {
    return (
      <article className="home">
        <h1>VanR Calc</h1>
        <p>Escolha uma calculadora e divirta-se!</p>
        <div className="navigation">
          <Link to="/imc-calculator" className="link">Calculadora de IMC</Link>
          <Link to="/gestational-age-calculator" className="link">Calculadora de idade gestacional</Link>
          <Link to="/regular-calculator" className="link">Calculadora simples</Link>
        </div>
      </article>
    );
  }
}
