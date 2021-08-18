/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './css/app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from './calculator/Calculator';
import Home from './home/Home';
import Quote from './quote/Quote';
import Header from './header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="wrap">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/calculator" exact component={Calculator} />
            <Route path="/quote" exact component={Quote} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
