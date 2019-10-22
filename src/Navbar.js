import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return(
      <div className="Navbar">
        <ul>
          <li className="Navbar-link">home</li>
          <li className="Navbar-link">about</li>
          <li className="Navbar-link">blog</li>
        </ul>
      </div>
    )
  }
}
export default Navbar
