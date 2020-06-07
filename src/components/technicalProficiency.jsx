import React from "react";

const Technical = ({ data }) => {
  return (
    <React.Fragment>
      <div className="technicalProficiency">
        <div className="technical-proficiency-top">
          <ul>
            <li>Technical Proficiency</li>
          </ul>
        </div>
        <div className="technical-proficiency-bottom">
          <div className="technical-items">
            <ul>
              {data.map((data) => (
                <li key={data.id}>{data.message}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Technical;
