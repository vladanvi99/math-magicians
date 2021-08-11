/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './css/calculator.css';
import calculate from '../../logic/calculate';
import Result from './Result';
import Buttons from './Buttons';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const newObject = calculate(this.state, buttonName);
    this.setState(newObject);
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculator-wrap">
        <div className="calculator">
          <Result result={!next ? total : next} />
          <Buttons onButtonClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
