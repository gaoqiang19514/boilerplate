import React, { Component } from "react";

function logComponentStackToMyService(componentStack) {
  console.log("componentStack", componentStack);
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // componentDidCatch(error, info) {
  //   this.setState({ error });
  // }

  render() {
    const { children } = this.props;
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <div style={{ padding: 10 }}>
          <h1>Something went wrong.</h1>
          <p>{error.message.toString()}</p>
          <p>{error.stack.toString()}</p>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
