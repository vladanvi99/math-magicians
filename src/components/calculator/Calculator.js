/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import './css/calculator.css';
import calculate from '../../logic/calculate';
import Result from './Result';
import Buttons from './Buttons';

const Calculator = () => {
  const [info, setInfo] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newObject = calculate(info, buttonName);
    setInfo({ ...info, ...newObject });
  };

  const { total, next } = info;
  return (
    <div className="calculator-wrap">
      <div className="calculator">
        <Result result={!next ? total : next} />
        <Buttons onButtonClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
