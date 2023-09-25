import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      time: this.getTimeWithOffset(props.offset),
    };
  }

  getTimeWithOffset = (offset) => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(
      currentTime.setHours(currentTime.getHours() + offset + utcOffset)
    );
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: this.getTimeWithOffset(this.props.offset),
      });
    }, 1000);
  }

  componentWillUnmount() {
    // Очищаем интервал при размонтировании компоненты
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">
          {this.state.time.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}

export default Clock;
