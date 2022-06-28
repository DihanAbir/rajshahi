import React, { useEffect } from "react";
import WOW from "wowjs";

function Banner() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <section class="vpma-banner-section">
      <div class="home-banner">
        <div class="vc_col-sm-12">
          <div class="banner-content container">
            <div class="wow fadeInDown left vc_col-sm-6 wow fadeInLeft">
              <h2 class="banner-title">
                Consequat Vel Illum <em>Dolore Feugiat Facilisis</em>
              </h2>
              <p class="content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod.
              </p>
            </div>
            <div class="right vc_col-sm-6 wow fadeInRight">
              <div class="form-content">
                <div class="login-form">
                  <div>
                    <h2>Login</h2>
                    <div class="errorMsg"></div>
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Username*"
                        name="user_email"
                        value=""
                      />
                      <div class="errorMsg"></div>
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        placeholder="Password*"
                        name="user_pass"
                        value=""
                      />
                      <div class="errorMsg"></div>
                    </div>
                    <div class="form-group common-btn">
                      <button type="submit" class="btn-signin sign-marg-no">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
