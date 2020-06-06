import React from "react";

const Languages = () => {
  return (
    <React.Fragment>
      <div className="languages">
        <div className="languages-top">
          <ul>
            <li className="language-headding-text">Languages</li>
          </ul>
        </div>
        <div className="languages-bottom">
          <div className="languages-item">
            <div className="languages-item-left">
              <p className="language-item-name">Bangla</p>
            </div>
            <div className="languages-item-right">
              <div className="languages-right-top">
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
              </div>
              <div className="languages-right-bottom">
                <p>Native</p>
              </div>
            </div>
          </div>

          <div className="languages-item">
            <div className="languages-item-left">
              <p className="language-item-name">English</p>
            </div>
            <div className="languages-item-right">
              <div className="languages-right-top">
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/unfiled-icon.png" alt="unfiled icon" />
              </div>
              <div className="languages-right-bottom">
                <p>Very Good</p>
              </div>
            </div>
          </div>

          <div className="languages-item">
            <div className="languages-item-left">
              <p className="language-item-name">Hindi</p>
            </div>
            <div className="languages-item-right">
              <div className="languages-right-top">
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/filled-icon.png" alt="filed icon" />
                <img src="./icons/unfiled-icon.png" alt="unfiled icon" />
              </div>
              <div className="languages-right-bottom">
                <p>Very Good</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Languages;
