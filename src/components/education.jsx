import React from "react";

const Education = () => {
  return (
    <React.Fragment>
      <div className="education">
        <div className="education-top">
          <ul>
            <li>Education</li>
          </ul>
        </div>
        <div className="education-bottom">
          <div className="education-items">
            <div className="education-items-left">
              <p className="edu-items-date">2014 June - 2018 June</p>
            </div>
            <div className="education-items-right">
              <div className="items-right-top">
                <h2 className="right-top-title">
                  Diploma in Environmental Technology, Khulna Polytechnic
                  Institute
                </h2>
              </div>
              <div className="items-right-bottom">
                <ul>
                  <li>Diploma Engineering in Environmental Technology.</li>
                  <li>
                    Completed industrial attachment in Water Supply &amp;
                    Sewerage Authority(WASA) Khulna.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="education-items">
            <div className="education-items-left">
              <p className="edu-items-date">2018 Jan - 2018 June</p>
            </div>
            <div className="education-items-right">
              <div className="items-right-top">
                <h2 className="right-top-title">
                  Professional Diploma in Internet Programming &amp; Web
                  Development, Khulna University of Engineering &amp; Technology
                </h2>
              </div>
              <div className="items-right-bottom">
                <ul>
                  <li>
                    Professional Diploma in Internet Programming &amp; Web
                    Development.
                  </li>
                  <li>
                    Completed industrial attachment in Water Supply &amp;
                    Sewerage Authority(WASA) Khulna.
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

export default Education;
