import React from "react";

const Software = () => {
  return (
    <React.Fragment>
      <div className="software">
        <div className="software-top">
          <ul>
            <li className="software-headding-text">Software</li>
          </ul>
        </div>
        <div className="software-bottom">
          <div className="software-items">
            <div className="left">
              <p className="software-items-name">Photoshop</p>
            </div>
            <div className="right">
              <div className="right-top">
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/unfiled-icon.png" alt="Unfiled icon" />
                <img src="./icons/unfiled-icon.png" alt="Unfiled icon" />
              </div>
              <div className="right-bottom">
                <p>Good</p>
              </div>
            </div>
          </div>

          <div className="software-items">
            <div className="left">
              <p className="software-items-name">Microsoft Office (Word)</p>
            </div>
            <div className="right">
              <div className="right-top">
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/unfiled-icon.png" alt="Unfiled icon" />
              </div>
              <div className="right-bottom">
                <p>Very Good</p>
              </div>
            </div>
          </div>

          <div className="software-items">
            <div className="left">
              <p className="software-items-name">Windows</p>
            </div>
            <div className="right">
              <div className="right-top">
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/unfiled-icon.png" alt="Unfiled icon" />
              </div>
              <div className="right-bottom">
                <p>Very Good</p>
              </div>
            </div>
          </div>
          <div className="software-items">
            <div className="left">
              <p className="software-items-name">Git</p>
            </div>
            <div className="right">
              <div className="right-top">
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/unfiled-icon.png" alt="unfiled icon" />
                <img src="./icons/unfiled-icon.png" alt="unfiled icon" />
              </div>
              <div className="right-bottom">
                <p>Good</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Software;
