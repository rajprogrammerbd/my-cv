import React, { Component } from "react";
import PersonalInfo from "./components/personal-info";
import Skills from "./components/skills";
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
    skills: [
      { id: 1, message: "Team Management" },
      { id: 2, message: "Coding Languages ( Javascript, Python )" },
      { id: 3, message: "Problem Solving" },
      { id: 4, message: "Good Leadership Skills" },
      { id: 5, message: "Communication Skills" },
      { id: 6, message: "Innvotive Thinking" },
      { id: 7, message: "Analytical Skills" },
      { id: 8, message: "Patience" },
      { id: 9, message: "Database Architecture" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="container-left">
            <PersonalInfo personInfo={this.state.personalInfo} />
            <Skills skills={this.state.skills} />
          </div>
          <div className="container-right"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
