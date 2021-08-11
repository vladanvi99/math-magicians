/* eslint-disable react/prefer-stateless-function, react/prop-types */
import React from 'react';

class Buttons extends React.Component {
  render() {
    const { onButtonClick } = this.props;
    return (
      <div className="buttons-wrap">
        <div className="buttons-row">
          <button name="AC" className="uni-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>AC</button>
          <button name="+/-" className="uni-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>+/-</button>
          <button name="%" className="uni-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>%</button>
          <button name="÷" className="uni-button orange-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>÷</button>
        </div>
        <div className="buttons-row">
          <button name="7" className="uni-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>7</button>
          <button name="8" className="uni-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>8</button>
          <button name="9" className="uni-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>9</button>
          <button name="x" className="uni-button orange-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>x</button>
        </div>
        <div className="buttons-row">
          <button name="4" className="uni-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>4</button>
          <button name="5" className="uni-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>5</button>
          <button name="6" className="uni-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>6</button>
          <button name="-" className="uni-button orange-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>-</button>
        </div>
        <div className="buttons-row">
          <button name="1" className="uni-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>1</button>
          <button name="2" className="uni-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>2</button>
          <button name="3" className="uni-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>3</button>
          <button name="+" className="uni-button orange-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>+</button>
        </div>
        <div className="buttons-row">
          <button name="0" className="uni-button zero-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>0</button>
          <button name="." className="uni-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>.</button>
          <button name="=" className="uni-button orange-button" type="button" onClick={(e) => onButtonClick(e.target.name)}>=</button>
        </div>
      </div>
    );
  }
}

export default Buttons;
