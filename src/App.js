import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="container-left">
            <p>Hello World!</p>
          </div>
          <div className="container-right">
            <p>Hello World!</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
