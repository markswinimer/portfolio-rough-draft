import React, { Component } from 'react';
import './Bubble.css';

class Bubble extends Component {
  render() {
    const { image, sub, body, title, side, position } = this.props;

    let sideArray = [this.props.side];
    let style = side === "left" ? "left" : "right";

    let bubbleImage = sideArray.map(s => (
        <div className={`Bubble-image ${style}`}>
          <img src={this.props.image} />
        </div>
    ))

    // let bubbleRight = side === "right" ? bubbleImage : "";
    // let bubbleLeft = side === "left" ? bubbleImage : "";
    let bubbleRight = "";
    let bubbleLeft = bubbleImage;

    return (
        <div className={`Bubble-container ${side} ${position}`}>
          <div className={`Bubble ${style} ${position}`}>

          {bubbleLeft}

          <div className={`Bubble-info ${style}`}>
            <h1>{this.props.title}</h1>
            <h2>{this.props.sub}</h2>
            <p>{this.props.body}</p>
          </div>

          {bubbleRight}

        </div>
      </div>
    )
  }
}
export default Bubble;
