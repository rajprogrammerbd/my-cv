import React, { Component } from "react";
import PersonalInfo from "./components/personal-info";
import Skills from "./components/skills";
import Software from "./components/software";
import Languages from "./components/languages";
import Header from "./components/header";
import Expriences from "./components/expriences";
import Technical from './components/technicalProficiency';
import Education from './components/education';
import Cirtificate from './components/cirtificate';
import Interest from './components/interest';
import "./App.scss";


class App extends Component {
  state = {
    imageShow: false,
    interest: [
      { id: 1, name: "Software Developer" },
      { id: 2, name: "Artificial Intelligence" }
    ],
    personalInfo: [
      {
        id: 1,
        value: "Country: Bangladesh, City: Khulna",
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
      {
        id: 6,
        value: "https://www.hackerrank.com/rd2249619",
        imageAddress: "./icons/hackerrank.png"
      }
    ],
    skills: [
      { id: 1, message: "Team Management" },
      { id: 2, message: "Coding Languages ( Javascript )" },
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
      { id: 2, message: "Developed new automated testing systems." },
      { id: 3, message: "Created test scripts for testing mainframe and web-based systems." },
      { id: 4, message: "Good knowledge of algorithms and data structures" },
      { id: 5, message: "Develop websites and web applications using Object Oriented Programming (OOP) as well as Javascript Programming." },
      { id: 6, message: "I had work experience in Functional Programming in Javascript." },
      { id: 7, message: "Experience of working on CSS Preprocessors like SCSS & SASS along with node js." },
      { id: 8, message: "Expert in developing websites and professional web applications using Javascript, react js, HTML, CSS3, Jquery." },
      { id: 9, message: "Strong knowledge in cross-browser compatibility issues and building back-end service with node js." },
      { id: 10, message: "Excellent experience in working with Webpack, JWT and other plugins." },
      { id: 11, message: "Experience in working with RESTful web services and implementing RESTful APIs with express js." },
      { id: 12, message: "Writing front-end code like HTML, CSS for assigned user requirements using various other Javascript frameworks." },
      { id: 13, message: "Experience in working with git and GitHub." },
      { id: 14, message: "Experience in writing PHP code and database design and writing complex queries using MySql and MongoDB." },
      { id: 15, message: "Experience in website development with WordPress." },
      { id: 16, message: "Expert in visualizing data with D3.js and for animation use several libraries." }
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
            <Interest data={this.state.interest} />
          </div>
          <div className="container-right">
            <Header image={this.state.imageShow} />
            <Expriences />
            <Technical data={this.state.technicalProficiency} />
            <Education />
            <Cirtificate />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
