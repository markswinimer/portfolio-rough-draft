import React, { Component } from 'react';
import './Title.css'

class Title extends Component {
  render() {
    return(
      <div className="Title-container">
      <div className="Title">
        <div className="Title-name">
          <h1>Mark Swinimer</h1>
          <h2>web developer</h2>
        </div>
        <div className="Title-blurb">
          <p>My passion is creating clean, creative and functional solutions</p>
        </div>
      </div>
    </div>
    )
  }
}
export default Title;
