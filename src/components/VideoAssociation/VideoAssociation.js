import React, { useEffect } from "react";
import videoData from "./VideoData";
import WOW from "wowjs";

import videoBanner from "../../images/vpma-video-association-img.png";

function VideoAssociation() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <section class="section-gapping videos-association vpma-videos-association">
      <div class="container left-right-warp">
        <div class="right vc_col-sm-6">
          <h2 class="common-title mobile-title-vpma wow fadeInUp">
            Collaborate With
            <br />
            <em>Real Video Professionals</em>
          </h2>
          <div class="wow fadeInLeft">
            <div class="common-img-warp">
              <img src={videoBanner} />
            </div>
          </div>
        </div>
        <div class="left vc_col-sm-6">
          <h2 class="common-title desktop-title-vpma wow fadeInUp">
            Collaborate With
            <br />
            <em>Real Video Professionals</em>
          </h2>
          <div class="real-video-content wow fadeInUp">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit.
            </p>
          </div>
          {videoData.map((video) => (
            <div class="img-content-warp first wow fadeInUp">
              <div class="icon-img vc_col-sm-3">
                <div class="common-img-warp">
                  <img src={video.image} alt="image" />
                </div>
              </div>
              <div class="title-content-warp vc_col-sm-9">
                <h2 class="title">{video.title}</h2>
                <div class="content">
                  <p>
                    {video.description}
                    <a class="redplus-icon" href="#">
                      +
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoAssociation;
