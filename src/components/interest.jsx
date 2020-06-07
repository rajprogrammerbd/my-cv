import React from "react";

const Interest = ({ data }) => {
  return (
    <React.Fragment>
      <div className="interest">
        <div className="interest-top">
          <ul>
            <li>Interests</li>
          </ul>
        </div>
        <div className="interest-bottom">
          <ul>
            {data.map((obj) => (
              <li key={obj.id}>{obj.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Interest;
