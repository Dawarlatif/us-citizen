import React from "react";

const Loader = () => {
  return (
    <div id="loader">
      <div id="alert">
        <h3>QUICK NOTICE!</h3>
        <ul className="outer">
          <li>Email Lookup Service has been enabled upon requests</li>
          <li>With associated phone numbers for enhanced reachability</li>
        </ul>
        Kudos to our contributors for keeping us updated throughout the process:
        <br />
        <a style={{ textDecoration: "none" }} href="#!">
          @Anthony{" "}
        </a>
        &nbsp;
        <a style={{ textDecoration: "none" }} href="#!">
          @David{" "}
        </a>
        &nbsp;
        <a style={{ textDecoration: "none" }} href="#!">
          @Cameron Zahid{" "}
        </a>
        &nbsp;
        <a style={{ textDecoration: "none" }} href="#!">
          @Adam Alexander 3{" "}
        </a>
        &nbsp;
        <a style={{ textDecoration: "none" }} href="#!">
          @Elijah{" "}
        </a>
        &nbsp;
        <a style={{ textDecoration: "none" }} href="#!">
          @George{" "}
        </a>
        &nbsp;
        <a style={{ textDecoration: "none" }} href="#!">
          @Richard{" "}
        </a>
        &nbsp;
        <a style={{ textDecoration: "none" }} href="#!">
          @Theodore
        </a>
      </div>
      <br />
      <div id="update">
        <ul className="outer">
          <li>
            We are always open to{" "}
            <span style={{ fontWeight: "bold" }}>suggestions and feedback</span>
            , please reach us at{" "}
            <a
              href="https://join.skype.com/invite/ENHMqDFIcQyO"
              target="_blank"
              rel="noreferrer"
            >
              Skype
            </a>{" "}
            or <a href="mailto:support@uspeoplesearch.net">Email us</a>
          </li>
        </ul>
      </div>
      <div
        className="close"
        onClick={() => togglePopup(document.getElementById("loader"))}
      >
        CLOSE
      </div>
    </div>
  );
};

// Define the togglePopup function
const togglePopup = (element) => {
  element.style.display = "none";
};

export default Loader;
