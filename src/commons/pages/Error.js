import React, { Component } from 'react';
import loadable from '@loadable/component'; //지연 로딩

const ErrorDisplay = loadable(() => import('../components/ErrorDisplay'));

class ErrorPage extends Component {
  state = {
    message: '',
  };
  componentDidCatch(error, info) {
    if (error) {
      this.setState({ message: error.message });
      console.error(error, info);
    }
  }

  render() {
    const { children } = this.props; //태그 안쪽에 있는 것 보여줌
    const { message } = this.state;

    return message ? <ErrorDisplay>{message}</ErrorDisplay> : children;
  }
}

export default React.memo(ErrorPage);
