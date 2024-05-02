import React from "react";

const Header = () => {
  return (
    <header>
      <div className="site-logo-container">
        <div className="site-logo">
          <img
            src="https://scontent.fisb6-1.fna.fbcdn.net/v/t39.30808-6/438100265_2147009215648329_7388066863483157766_n.jpg?stp=cp0_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH1Bda9uwO4La0EE_J95cNXfHmdzgJSgy98eZ3OAlKDL6Rn0bx8Y2SKq9dA9NCNrofgIjVzGkPyGeqN-s7t9ri-&_nc_ohc=XfGoqSTIY7MAb66W0JR&_nc_ht=scontent.fisb6-1.fna&oh=00_AfAUqlXE8hIYlSeXGmTAYnt8eZ4P02FfKv_lRfNqtqfcVA&oe=6625878D"
            alt="US Citizen Identity Logo.png"
          />
        </div>
        <div className="site-title">
          <div className="user-icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#2D5B8D"
              viewBox="0 0 52 52"
            >
              <path d="M 30.933594 32.527344 C 30.785156 30.914063 30.84375 29.789063 30.84375 28.316406 C 31.574219 27.933594 32.882813 25.492188 33.101563 23.429688 C 33.675781 23.382813 34.582031 22.824219 34.847656 20.613281 C 34.988281 19.425781 34.421875 18.757813 34.074219 18.546875 C 35.007813 15.738281 36.949219 7.046875 30.488281 6.148438 C 29.820313 4.980469 28.117188 4.390625 25.90625 4.390625 C 17.050781 4.554688 15.984375 11.078125 17.925781 18.546875 C 17.578125 18.757813 17.011719 19.425781 17.152344 20.613281 C 17.421875 22.824219 18.324219 23.382813 18.898438 23.429688 C 19.117188 25.492188 20.476563 27.933594 21.210938 28.316406 C 21.210938 29.789063 21.265625 30.914063 21.117188 32.527344 C 19.367188 37.238281 7.546875 35.914063 7 45 L 45 45 C 44.453125 35.914063 32.683594 37.238281 30.933594 32.527344 Z" />
            </svg>
          </div>
          <h1 className="title-begin">US CITIZEN</h1>
          <h1 className="title-end">IDENTITY</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
