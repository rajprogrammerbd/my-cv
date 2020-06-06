import React from "react";

const PersonalInfo = ({ personInfo }) => {
  return (
    <React.Fragment>
      <div className="personal-info">
        <div className="top">
          <ul>
            <li className="personal-headding-text">Personal Info</li>
          </ul>
        </div>
        <div className="bottom">
          {personInfo.map((obj) => (
            <div key={obj.id} className="personal-links">
              <img
                src={obj.imageAddress}
                className="personal-links-images"
                alt="personal links"
              />
              <p className="personal-link-text">{obj.value}</p>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PersonalInfo;
