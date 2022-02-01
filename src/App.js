import React from "react";
// Components
import Button from "./components/Button";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: [],
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
    };

    this.getCountry = this.getCountry.bind(this);
  }

  // componentDidMount() {
  //   fetch("https://restcountries.com/v2/name/france")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       this.setState({ france: res });
  //       this.state.france.map((elem) => {
  //         return this.setState({
  //           name: elem.name,
  //           capital: elem.capital,
  //           flag: elem.flag,
  //           population: elem.population,
  //           region: elem.region,
  //         });
  //       });
  //     });
  // }

  getCountry(country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ country: res });
        this.state.country.map((elem) => {
          return this.setState({
            name: elem.name,
            capital: elem.capital,
            flag: elem.flag,
            population: elem.population,
            region: elem.region,
          });
        });
      });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // attention aux setState ici, risque de boucle infinie
  //   console.log(prevState, this.state);
  // }

  render() {
    return (
      <section>
        <h1>Country selector</h1>
        <Button onClick={() => this.getCountry("france")}>France</Button>
        <Button onClick={() => this.getCountry("brazil")}>Brazil</Button>
        <Button onClick={() => this.getCountry("croatia")}>Croatia</Button>
        <div>
          <p>Name: {this.state.name}</p>
          <p>Capital: {this.state.capital}</p>
          <p>Flag: {this.state.flag}</p>
          <p>Population: {this.state.population}</p>
          <p>Region: {this.state.region}</p>
        </div>
      </section>
    );
  }
}

export default App;
