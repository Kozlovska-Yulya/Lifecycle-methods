import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
    };
  }

  componentDidMount() {
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
  }

  handleOnline = () => {
    this.setState({ isOnline: true });
  };

  handleOffline = () => {
    this.setState({ isOnline: false });
  };

  render() {
    const { isOnline } = this.state;
    return (
      <div
        className={`status ${isOnline ? 'status_online' : 'status_offline'}`}
      >
        {isOnline ? 'online' : 'offline'}
      </div>
    );
  }
}

export default ConnectionStatus;
