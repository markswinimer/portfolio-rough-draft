import React, { Component } from 'react';
import profile from "./images/profile-dog.jpg"
import './Navbar.css';

class Navbar extends Component {
  render() {
    return(
      <nav className="Navbar-container">
        <div className="Navbar">
          <div className="Navbar-profile">
            <img src={profile}/>
          </div>
          <div className="Navbar-link-container">
            {/* <a className="Navbar-link">home</a> */}
            <a className="Navbar-link">about</a>
            {/* <a className="Navbar-link">blog</a> */}
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar
