import React from "react";
// Components
import Button from "./components/Button";
import Card from "./components/Card";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "d-none",
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
            flag: elem.flags.png,
            population: elem.population,
            region: elem.region,
          });
        });
      });
    this.setState({ display: "d-flex" });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // attention aux setState ici, risque de boucle infinie
  //   console.log(prevState, this.state);
  // }

  render() {
    return (
      <section className="p-4 d-flex flex-column justify-content-center align-items-center">
        <h1 className="pb-4">Country selector</h1>
        <div>
          <Button onClick={() => this.getCountry("france")}>France</Button>
          <Button onClick={() => this.getCountry("brazil")}>Brazil</Button>
          <Button onClick={() => this.getCountry("croatia")}>Croatia</Button>
        </div>
        <article className="w-50">
          <Card
            display={this.state.display}
            name={this.state.name}
            capital={this.state.capital}
            flag={this.state.flag}
            population={this.state.population}
            region={this.state.region}
          />
        </article>
      </section>
    );
  }
}

export default App;
