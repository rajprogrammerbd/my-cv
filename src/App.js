import React, { Component } from "react";
import PersonalInfo from "./components/personal-info";
import Skills from "./components/skills";
import Software from "./components/software";
import Languages from "./components/languages";
import Header from "./components/header";
import Expriences from "./components/expriences";
import Technical from './components/technicalProficiency';
import "./App.scss";

class App extends Component {
  state = {
    imageShow: true,
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
    technicalProficiency: [
      { id: 1, message: "Creating websites and web-based applications (SPA)." },
      { id: 2, message: "Develop websites and web applications using Object Oriented Programming (OOP) as well as Javascript Programming." },
      { id: 3, message: "I had work experience in Functional Programming in Javascript." },
      { id: 4, message: "Experience of working on CSS Preprocessors like SCSS & SASS along with node js." },
      { id: 5, message: "Expert in developing websites and professional web applications using Javascript, react js, HTML, CSS3, Jquery." },
      { id: 6, message: "Strong knowledge in cross-browser compatibility issues and building back-end service with node js." },
      { id: 7, message: "Experience in working with RESTful web services and implementing RESTful APIs with express js." },
      { id: 8, message: "Writing font-end code like HTML, CSS for assigned user requirements using various other Javascript frameworks." },
      { id: 9, message: "Experience in working with git and GitHub." },
      { id: 10, message: "Experience in writing PHP code and database design and writing complex queries using MySql and MongoDB." },
      { id: 11, message: "Experience in webpage development with WordPress." }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="container-left">
            <PersonalInfo personInfo={this.state.personalInfo} />
            <Skills skills={this.state.skills} />
            <Software software={this.state.software_level} />
            <Languages />
          </div>
          <div className="container-right">
            <Header image={this.state.imageShow} />
            <Expriences />
            <Technical data={this.state.technicalProficiency} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
