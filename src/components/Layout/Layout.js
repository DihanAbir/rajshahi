import React, { useEffect, useState } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { MdKeyboardArrowUp } from "react-icons/md";

function Layout({ children }) {
  const [showTop, setShowTop] = useState(true);
  const [showOrHide, setShowOrHide] = useState(false);

  // function for animation
  function animateToTop(e) {
    e.preventDefault();
    var scrollToTop = window.setInterval(function () {
      var pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 4);
  }

  useEffect(() => {
    let previousPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener("scroll", (e) => {
      let scrolTop = e.target.documentElement.scrollTop;
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
    <div className="">
      <Header />
      {children}
      <Footer />

      {showOrHide && (
        <div className="tp" onClick={(event) => animateToTop(event)}>
          <p className="top-btn1">
            <span className="top-span">
              <MdKeyboardArrowUp />
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Layout;
