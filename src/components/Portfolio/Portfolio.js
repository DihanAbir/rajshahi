import React, { useEffect } from "react";
import WOW from "wowjs";

import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player";
import { ImCross } from "react-icons/im";

// portfolio image
import portfolio1 from "../../images/portfolio-img-6.png";
import portfolio2 from "../../images/portfolio-img-5.png";
import portfolio3 from "../../images/portfolio-img-4.png";
import portfolio4 from "../../images/portfolio-img-3.png";
import portfolio5 from "../../images/portfolio-img-2.png";
import portfolio6 from "../../images/portfolio-img-1.png";
import Player from "./Player";

const PorffolioData = [
  {
    image: portfolio1,
    title: "AACD Advisor",
    video: "https://player.vimeo.com/video/412253743",
  },
  {
    image: portfolio2,
    title: "NGMA Membership Promo Video",
    video: "https://player.vimeo.com/video/454108795",
  },
  {
    image: portfolio3,
    title: "2021 AASL Conference Promo",
    video: "https://player.vimeo.com/video/447812515",
  },
  {
    image: portfolio4,
    title: "AASL Industry Video",
    video: "https://player.vimeo.com/video/440460177",
  },
  {
    image: portfolio5,
    title: "VPMA Stock Library",
    video: "https://player.vimeo.com/video/471549573",
  },
  {
    image: portfolio6,
    title: " AAFA Shipping Crisis Explainer",
    video: "https://player.vimeo.com/video/607613229?h=f302951440",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  // p: 4,
};
function Portfolio() {
  const [open, setOpen] = React.useState(false);
  const [VIdeo, setVIdeo] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <section class="section-gapping live-action-section vpma-portfolio-section">
      <div class="vc_row">
        <div class="container vc_col-sm-12">
          <h2 class="common-title wow fadeInUp">
            Association <em>Portfolio</em>
          </h2>
          <div class="portfolio-content wow fadeInUp">
            <p>
              Learn from hundreds of other associations to get ideas to engage
              your membership and industry.
            </p>
          </div>
          <div class="portfolio-blog-warp wow fadeInUp">
            <div class="portfolio-content-wrap">
              {PorffolioData.map((item, index) => (
                <div class="portfolio-section">
                  <div class="portfolio-wrap">
                    <div class="portfolio-video">
                      {/* <a class="wplightbox video-popup" href={item.video}> */}
                      <a
                        onClick={() => {
                          setVIdeo(item.video);
                          handleOpen();
                        }}
                        class="wplightbox video-popup"
                      >
                        <img src={item.image} alt="portfolio-image" />
                      </a>
                      <span style={{ display: "none" }}>
                        <Button onClick={handleOpen}>Open modal</Button>
                      </span>

                      {/* <Player
                        open={this.state.open}
                        toggleModal={this.onOpenModal}
                      /> */}
                    </div>
                    <div class="partners-title">{item.title}</div>
                  </div>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      {/* <Box sx={style}> */}
                      {/* <ReactPlayer
                          // playing={true}
                          playIcon={true}
                          width="100%"
                          url="https://vimeo.com/3155182"
                        /> */}
                      <div className="modal-custome">
                        <iframe
                          src={VIdeo}
                          // src="https://www.youtube.com/embed/zTdlagjiMuE"
                          title="YouTube video player"
                          frameborder="0"
                          // width="100%"
                          // height="100%"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                        <div onClick={() => handleClose()} className="cross">
                          <span>
                            <ImCross color="#fff" />
                          </span>
                        </div>
                      </div>
                      {/* </Box> */}
                    </Fade>
                  </Modal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
