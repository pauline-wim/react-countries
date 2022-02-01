import React from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class Button extends React.Component {
  render() {
    return (
      <button
        className="btn btn-primary me-4 ms-4"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
