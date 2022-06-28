import React, { useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";

// logo
import logo from "../../images/vpma-page-navbar-logo.png";

function Header() {
  const [showOrHide, setShowOrHide] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let currentPosition = e.target.documentElement.scrollTop;
      console.log(typeof currentPosition);
      if (currentPosition > 200) {
        setShowOrHide(true);
      } else {
        setShowOrHide(false);
      }
    });
  }, []);

  return (
    <header id="masthead" className="site-header">
      {showOrHide && (
        <header id="headersticky" className="site-header">
          <div className="site-logo vpma-logo">
            <a className="custom-logo-link" href="index.html">
              <img className="custom-logo" src={logo} alt="image" />
            </a>
          </div>
          <div className="header-contact">
            <div className="contact-number">
              <div className="contact-phone">
                <a style={{ display: "flex" }} href="tel:8008206020">
                  <span className="phonespan3">
                    <FiPhoneCall color="#D10000" size={25} />
                  </span>
                  <span className="phonenumberspan">(800) 820-6020</span>
                </a>
              </div>
            </div>
          </div>
        </header>
      )}
      <div className="site-logo vpma-logo">
        <a className="custom-logo-link" href="index.html">
          <img className="custom-logo" src={logo} alt="image" />
        </a>
      </div>
      <div className="header-contact">
        <div className="contact-number">
          <div className="contact-phone">
            <a style={{ display: "flex" }} href="tel:8008206020">
              <span className="phonespan">
                <FiPhoneCall />
              </span>
              <span className="phonespan2">
                <FiPhoneCall color="#D10000" size={25} />
              </span>
              <span className="phonenumberspan">(800) 820-6020</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
