import React from "react";

const Header = ({ image }) => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="header-top">
          {image ? (
            <div className="header-top-left">
              <img
                src="./images/profile.jpg"
                className="header-image"
                alt="Profile"
              />
            </div>
          ) : null}
          <div className="header-top-bottom">
            <h2 className="header-name">
              raj <span style={{ fontWeight: 900 }}>dutta</span>
            </h2>
            <p>front end developer</p>
          </div>
        </div>
        <div className="header-bottom">
          <p className="career-object">
            Creative and self-starting Front-End Developer with{" "}
            <span style={{ fontWeight: "bold" }}>3 years</span> of experience
            building stable{" "}
            <span style={{ fontWeight: "bold" }}>
              single page application (SPA)
            </span>{" "}
            websites and web-based applications in fast-paced, collaborative
            environments. Leverage analytical skills and strong attention to
            detail to deliver original and efficient{" "}
            <span style={{ fontWeight: "bold" }}>web solutions</span>, provide
            technical knowledge and expertise, build{" "}
            <span style={{ fontWeight: "bold" }}>new websites</span> from start
            to finish, and successfully manage a team of other software
            professionals.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
