import React, { Component } from 'react';

export default class IMCTable extends Component {
  render () {
    return (
      <section className="table">
        <h4>Classificação do IMC</h4>
        <p>
          <span>Menor do que 18,5</span>
          <span>Peso baixo</span>
        </p>
        <p>
          <span>Entre 18,5 e 24,9</span>
          <span>Peso adequado</span>
        </p>
        <p>
          <span>Entre 25,0 e 29,9</span>
          <span>Sobrepeso</span>
        </p>
        <p>
          <span>Entre 30,0 e 34,9</span>
          <span>Obesidade Grau 1</span>
        </p>
        <p>
          <span>Entre 35,0 e 39,9</span>
          <span>Obesidade Grau 2</span>
        </p>
        <p>
          <span>Maior que 40,0</span>
          <span>Obesidade Grau 3</span>
        </p>
      </section>
    );
  }
}