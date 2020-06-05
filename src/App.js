import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  state = {
    personalInfo: [
      {
        id: 1,
        value: "Bangladesh, Khulna",
        imageAddress: "./icons/location.png",
      },
      { id: 2, value: "+8801959-817009", imageAddress: "./icons/phone.png" },
      { id: 3, value: "rd2249619@gmail.com", imageAddress: "./icons/mail.png" },
      {
        id: 4,
        value: "linkedin.com/in/rajprogrammerbd/",
        imageAddress: "./icons/instgram.png",
      },
      {
        id: 5,
        value: "github.com/rajprogrammerbd",
        imageAddress: "./icons/github.png",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="container-left">
            <div className="personal-info">
              <div className="top">
                <ul>
                  <li className="personal-headding-text">Personal Info</li>
                </ul>
              </div>
              <div className="bottom">
                {this.state.personalInfo.map((obj) => (
                  <div key={obj.id} className="personal-links">
                    <img
                      src={obj.imageAddress}
                      className="personal-links-images"
                    />
                    <p className="personal-link-text">{obj.value}</p>
                  </div>
                ))}
              </div>
            </div>
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
