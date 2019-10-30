import React, { Component } from 'react';
import Title from './Title';
import Bubble from './Bubble';
import Navbar from './Navbar';
import Contact from './Contact';
import Flourish from './Flourish';
import FooterComponent from './FooterComponent';
import './Home.css';

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <div className="Home-content">
          <Navbar />
          <Title />
          <div className="Flourish top">
            <div className="b-top"></div>
            <div className="b-bottom"></div>
          </div>
          <Bubble
            side="left"
            position="top"
            image="https://assets.pcmag.com/media/images/521567-how-to-build-a-website.jpg?thumb=y&width=810&height=456"
            title="Web Development"
            sub="Web applications in React"
            body ="Making projects is like making sentences. You type and you type until is somehow makes sense. But wait. It doesn't. So you type some more just to fill out the rest of this space because that's exactly the point. Filler."
          />
          <div className="Flourish-2">
            <div className="b-top-2"></div>
            <div className="b-bottom-2"></div>
          </div>
          <Bubble
            side="right"
            position="mid"
            image="https://assets.pcmag.com/media/images/521567-how-to-build-a-website.jpg?thumb=y&width=810&height=456"
            title="Learning"
            sub="Tools and technologies"
            body ="Making projects is like making sentences. You type and you type until is somehow makes sense. But wait. It doesn't. So you type some more just to fill out the rest of this space because that's exactly the point. Filler."
          />
          <div className="Flourish">
            <div className="b-top"></div>
            <div className="b-bottom"></div>
          </div>
          <Bubble
            side="left"
            position="bottom"
            image="https://assets.pcmag.com/media/images/521567-how-to-build-a-website.jpg?thumb=y&width=810&height=456"
            title="Working on now"
            sub="passion projects"
            body ="Making projects is like making sentences. You type and you type until is somehow makes sense. But wait. It doesn't. So you type some more just to fill out the rest of this space because that's exactly the point. Filler."
          />
          <div className="Flourish-2 top">
            <div className="b-top-2"></div>
            <div className="b-bottom-2"></div>
          </div>
          <Contact />
          <FooterComponent />
        </div>
      </div>
    )
  }
}

export default Home;
