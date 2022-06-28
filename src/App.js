import React, { Suspense, useEffect } from "react";
import WOW from "wowjs";

import Layout from "./components/Layout/Layout";
import "./css/custom.css";
import "./css/animate.css";
import "./css/responsive.css";
import YouTube from "./components/Loader/Loader";

// import Banner from "./components/Banner/Banner";
// import Portfolio from "./components/Portfolio/Portfolio";
// import VideoAssociation from "./components/VideoAssociation/VideoAssociation";

const Banner = React.lazy(() => import("./components/Banner/Banner"));
const Portfolio = React.lazy(() => import("./components/Portfolio/Portfolio"));
const VideoAssociation = React.lazy(() =>
  import("./components/VideoAssociation/VideoAssociation")
);

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <Layout>
      {/* <Banner />
      <VideoAssociation />
      <Portfolio /> */}

      <Suspense fallback={<YouTube />}>
        <Banner />
      </Suspense>
      <Suspense fallback={<YouTube />}>
        <VideoAssociation />
      </Suspense>
      <Suspense fallback={<YouTube />}>
        <Portfolio />
      </Suspense>
    </Layout>
  );
}

export default App;
