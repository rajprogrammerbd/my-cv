import React from "react";

const Expriences = () => {
  return (
    <React.Fragment>
      <div className="expriences">
        <div className="expriences-top">
          <ul>
            <li className="expriences-title">Experience</li>
          </ul>
        </div>
        <div className="expriences-bottom">
          <div className="exprience-items">
            <div className="items-left">
              <p className="items-dates">Jan 2020 - June 2020</p>
            </div>
            <div className="items-right">
              <div className="items-right-top">
                <h3 className="right-top-title">Web Developer</h3>
                <p className="address">New Market, Khulna</p>
              </div>
              <div className="items-right-bottom">
                <ul>
                  <li>
                    Implemented websites, web applications, and landing pages
                    from the concept through development.
                  </li>
                  <li>Building stable and maintainable codebase using PHP.</li>
                  <li>
                    Creating a modular, responsive template using modern CSS
                    techniques and javascript libraries.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Expriences;
