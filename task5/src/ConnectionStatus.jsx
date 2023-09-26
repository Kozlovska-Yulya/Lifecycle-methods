import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

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
        {isOnline ? 'Онлайн' : 'Оффлайн'}
      </div>
    );
  }
}

export default ConnectionStatus;
