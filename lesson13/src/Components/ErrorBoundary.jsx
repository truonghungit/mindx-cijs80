import React from "react";

export class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError", error);
    return { hasError: true };
  }

  componentDidCatch(err, errInfo) {
    console.log("componentDidCatch", err, errInfo);
  }

  render() {
    return (
      <div>
        <h1>ErrorBoundary</h1>

        {this.state.hasError ? (
          <div>Error </div>
        ) : (
          <div>{this.props.children}</div>
        )}
      </div>
    );
  }
}
