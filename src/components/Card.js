import React from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class Card extends React.Component {
  render() {
    return (
      <div
        className={`${this.props.display} flex-column justify-content-center align-items-center bg-light border rounded-3 m-3 p-4`}
      >
        <img className="pb-4" src={this.props.flag} alt="country flag" />
        <p className="fw-bold fs-2">Name: {this.props.name}</p>
        <p className="fs-3">Capital: {this.props.capital}</p>
        <p>Population: {this.props.population}</p>
        <p>Region: {this.props.region}</p>
      </div>
    );
  }
}

export default Card;
