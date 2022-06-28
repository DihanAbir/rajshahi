import React from "react";

import footerLogo from "../../images/footer-logo.png";

function Copyright() {
  return (
    <footer id="colophon" className="site-footer">
      <div className="footer-details">
        <div className="footer-top-war">
          <div className="contect-details-box">
            <div className="footer-logo-warp">
              <a href="https://associationstudios.yoursmarthost.net/">
                <img src={footerLogo} alt="image" />
              </a>
            </div>
            <div className="contact-number">
              <div className="contact-phone">
                <a href="tel:8008206020">(800) 820-6020</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-info">
        <div className="footer-copyright">
          <div className="left">
            <span>&copy;</span> 2022&nbsp;
            <a href="index.html">
              <span className="hvr">Association Studios</span>{" "}
            </a>
            .&nbsp;All Rights Reserved.
          </div>
          <div className="right contect-details-box">
            <ul className="menu">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Copyright;
