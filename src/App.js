import { Component } from "react";
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
