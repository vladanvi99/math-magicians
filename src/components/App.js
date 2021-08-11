/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculator from './calculator/Calculator';
import './css/app.css';

class App extends React.Component {
  render() {
    return (
      <div className="wrap">
        <Calculator />
      </div>
    );
  }
}

export default App;
