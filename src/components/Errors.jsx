import React from "react";

const Errors = () => {
  return (
    <div
      className="errors d-col"
      style={{ justifyContent: "center", display: "none" }}
    >
      <p className="cx-prompt" id="await-input">
        ...
      </p>
      <div className="d-row cx-loader cx-prompt" id="cx-loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <p className="d-row cx-prompt" id="cx-not-found">
        <span>
          <img
            alt="not found img"
            src="./icon/user-not-found-50.png"
            width="30px"
            height="30px"
          />
        </span>
        Not Found!
      </p>
      <p className="d-row cx-prompt" id="cx-ie">
        <span>
          <img
            alt="not found img1"
            src="./icon/sad-cloud-50.png"
            width="40px"
            height="40px"
          />
        </span>
        Connection Failed!
      </p>
    </div>
  );
};

export default Errors;
