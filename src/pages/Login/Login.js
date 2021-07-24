import React, { Component } from "react";
import fire from "../../config/fire";
import FormLogin from "./FormLogin";
import Home from "./../Home/Home";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className="App">{this.state.user ? <Home /> : <FormLogin />}</div>
    );
  }
}

export default Login;
