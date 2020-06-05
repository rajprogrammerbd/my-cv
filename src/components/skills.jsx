import React from "react";

const Skills = ({ skills }) => {
  return (
    <React.Fragment>
      <div className="skills">
        <div className="skill-top">
          <ul>
            <li className="skill-headding-text">Skills</li>
          </ul>
        </div>
        <div className="skill-bottom">
          {skills.map((obj) => (
            <p key={obj.id} className="skills-names">
              {obj.message}
            </p>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
