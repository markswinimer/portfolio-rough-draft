import React, { Component } from 'react';
import Title from './Title';
import './Home.css';

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <div className="Home-content">
          <Title />
        </div>
      </div>
    )
  }
}

export default Home;
