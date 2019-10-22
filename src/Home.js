import React, { Component } from 'react';
import Title from './Title';
import Bubble from './Bubble';
import Navbar from './Navbar';
import './Home.css';

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <div className="Home-content">
          {/* <Navbar /> */}
          <Title />
          <Bubble
            side="left"
            image="https://assets.pcmag.com/media/images/521567-how-to-build-a-website.jpg?thumb=y&width=810&height=456"
            title="Web Development"
            sub="Web applications in React"
            body ="Making projects is like making sentences. You type and you type until is somehow makes sense. But wait. It doesn't. So you type some more just to fill out the rest of this space because that's exactly the point. Filler."
          />
          <Bubble
            side="right"
            image="https://assets.pcmag.com/media/images/521567-how-to-build-a-website.jpg?thumb=y&width=810&height=456"
            title="Learning"
            sub="Tools and technologies"
            body ="Making projects is like making sentences. You type and you type until is somehow makes sense. But wait. It doesn't. So you type some more just to fill out the rest of this space because that's exactly the point. Filler."
          />
          <Bubble
            side="left"
            image="https://assets.pcmag.com/media/images/521567-how-to-build-a-website.jpg?thumb=y&width=810&height=456"
            title="Working on now"
            sub="passion projects"
            body ="Making projects is like making sentences. You type and you type until is somehow makes sense. But wait. It doesn't. So you type some more just to fill out the rest of this space because that's exactly the point. Filler."
          />
        </div>
      </div>
    )
  }
}

export default Home;
