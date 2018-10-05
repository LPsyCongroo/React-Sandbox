import React from 'react';

export default class Lazy extends React.Component {
  state = {
    AsyncModule: null
  }

  componentDidMount() {
    this.props.getComponent()
      .then(mod => mod.default)
      .then(AsyncModule => setTimeout(() => this.setState({ AsyncModule }), 5000))
  }

  render() {
    const { loader, ...childProps } = this.props;
    const { AsyncModule } = this.state;

    if (AsyncModule)
      return (<AsyncModule {...childProps} ></AsyncModule>);

    if (loader) {
      const Loader = loader;
      return <Loader/>;
    }

    return null;
  }
}