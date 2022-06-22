import React, { Component } from 'react';

export default class IMCForm extends Component {
  render () {
    const {weight, height, onInputChange, onButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="weight-input">
          Peso (Kg):
          <input
            type="text"
            name="weight"
            id="weight-input"
            onChange={ onInputChange }
            value={ weight }
          />
        </label>

        <label htmlFor="height-input">
          Altura (m):
          <input
            type="text"
            name="height"
            id="height-input"
            onChange={ onInputChange }
            value={ height }
          />
        </label>

        <button
          type="button"
          onClick={ onButtonClick }
        >
          Calcular IMC
        </button>
      </form>
    );
  }
}