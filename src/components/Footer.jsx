import React from "react";

const Footer = () => {
  const handleContactUs = () => {
    window.open("https://join.skype.com/invite/WGJz5a5lUCVl");
  };

  return (
    <footer>
      <div className="footer">
        <div className="d-row footer-tagline">
          <h2 className="title footer-logo">-_ US CITIZEN IDENTITY</h2>
          <button
            className="contact-us"
            onClick={handleContactUs}
            type="button"
          >
            Contact Us
          </button>
        </div>
        <div className="d-row footer-links">
          <a href="/ud">Name Search</a>
          <a href="/">Reverse Phone</a>
          <a href="/email">Reverse Email</a>
          <a href="/ud">About Us</a>
          <a href="/ud">How Tos'</a>
          <a href="/ud">FAQs</a>
          <a href="/ud">Terms of Use</a>
        </div>
        <div className="d-row copyrights">© 2024 uscitizenidentity.net</div>
      </div>
    </footer>
  );
};

export default Footer;
