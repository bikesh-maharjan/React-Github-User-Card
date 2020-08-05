import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gitdata: [],
      users: [],
    };
  }

  componentDidMount() {
    axios // fetch intial data
      .get("https://api.github.com/users/bikesh-maharjan")

      .then((res) => {
        this.setState([
          {
            gitdata: res.data,
          },
        ]);
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("https://api.github.com/users/bikesh-maharjan/followers")
      .then((res) => {
        this.setState([
          {
            users: res.data,
          },
        ]);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1> Welcome to GitHub User!</h1>
      </div>
    );
  }
}

export default App;
