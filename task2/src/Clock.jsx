import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      date: this.getTimeWithOffset(props.offset),
    };
  }

  getTimeWithOffset = (offset) => {
    const currentUTC = new Date().getTime();
    const offsetMilliseconds = offset * 60 * 60 * 1000;
    const timeWithOffset = new Date(currentUTC + offsetMilliseconds);
    return timeWithOffset;
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">
          {this.state.date.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}

export default Clock;
