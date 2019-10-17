import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return(
      <div className="Navbar">
        <Row className="Row-name">
          <Col xs="auto" className="Navbar-name">
            <div className="name-name">
              Mark Swinimer
            </div>
            <div className="name-title">
              Web Developer
            </div>
          </Col>
        </Row>
        <Row className="Row-links">
          <Col lg="4">About</Col>
          <Col lg="4">Work</Col>
          <Col lg="4">Blog</Col>
        </Row>
      </div>
      )
    }
  }
  export default Navbar;
