import React, { Component } from 'react';
import './FooterComponent.css';

class FooterComponent extends Component {
  render() {
    return(
      <div className="FooterComponent-container">
        <ul className="FooterComponent">
          <li><strong>Mark Swinimer</strong></li>
          <li>markswinimer@gmail.com</li>
          <li>github.com/markswinimer</li>
          <li>linkedin.com/in/markswinimer</li>
        </ul>
      </div>
    )
  }
}
export default FooterComponent;
