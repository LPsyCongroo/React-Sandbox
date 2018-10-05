import React from "react";
import Scroll from "./Scroll";

class Parallaxer extends React.Component {
  render() {
    return (
      <Scroll render={({ _, y }) => {
        return (
        <img style={{
          transform: `translate3d(0, ${this.props.parallaxSpeed * y}px, 0)`
        }} src={this.props.imageSrc} alt={this.props.altText} />
        )
      }}/>
    );
  }
}

export default Parallaxer;