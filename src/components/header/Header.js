import React from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';

const Header = () => (
  <header>
    <nav>
      <Link className="logo" to="/">Math Magicians</Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
