import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    console.log(
      'shouldComponentUpdate(nextProps, nextState): decide to render or notto render'
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      'componentDidUpdate(prevProps, prevState):some updates based on new props'
    );
  }

  componentWillUnmount() {
    console.log(
      'componentWillUnmount(): cleanup before DOM related to component will be removed'
    );
  }
  return() {
    console.log('eturn React element to build DOM');
  }

  render() {
    return null;
  }
}

export default Life;
