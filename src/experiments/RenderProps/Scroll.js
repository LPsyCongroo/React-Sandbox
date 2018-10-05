import React from 'react';

class Scroll extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      x: null,
      y: null
    }
  }

  checkScrollPosition = () => {
    this.setState({
      x: window.pageXOffset,
      y: window.pageYOffset
    })
  }

  componentDidMount = () => {
    this.checkScrollPosition();

    window.addEventListener('scroll', this.checkScrollPosition);
}
  render() {
    return (
      <React.Fragment>
        {this.props.render({
          x: this.state.x,
          y: this.state.y
        })}
      </React.Fragment>
    )
  }
}

export default Scroll;