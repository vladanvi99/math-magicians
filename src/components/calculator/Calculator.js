/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './css/calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-wrap">
        <div className="calculator">
          <input type="text" placeholder="0" name="result" />
          <div className="buttons-wrap">
            <div className="buttons-row">
              <button className="uni-button" type="button">AC</button>
              <button className="uni-button" type="button">+/-</button>
              <button className="uni-button" type="button">%</button>
              <button className="uni-button orange-button" type="button">/</button>
            </div>
            <div className="buttons-row">
              <button className="uni-button" type="button">7</button>
              <button className="uni-button" type="button">8</button>
              <button className="uni-button" type="button">9</button>
              <button className="uni-button orange-button" type="button">x</button>
            </div>
            <div className="buttons-row">
              <button className="uni-button" type="button">4</button>
              <button className="uni-button" type="button">5</button>
              <button className="uni-button" type="button">6</button>
              <button className="uni-button orange-button" type="button">-</button>
            </div>
            <div className="buttons-row">
              <button className="uni-button" type="button">1</button>
              <button className="uni-button" type="button">2</button>
              <button className="uni-button" type="button">3</button>
              <button className="uni-button orange-button" type="button">+</button>
            </div>
            <div className="buttons-row">
              <button className="uni-button" type="button">AC</button>
              <button className="uni-button" type="button">+/-</button>
              <button className="uni-button" type="button">%</button>
              <button className="uni-button orange-button" type="button">+</button>
            </div>
            <div className="buttons-row">
              <button className="uni-button zero-button" type="button">0</button>
              <button className="uni-button" type="button">.</button>
              <button className="uni-button orange-button" type="button">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
