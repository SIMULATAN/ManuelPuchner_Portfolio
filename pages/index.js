import Head from "next/head";

import Layout from "../components/layout/layout.js";

import Background from "../components/background/Background.js";
import SocialsSidebar from "../components/socialsSidebar/SocialsSidebar.js";

import About from "../sections/about/About.js";
import Work from "../sections/work/Work.js";
import Notification from "../components/notification/Notification.js";

function Home() {
  return (
    <>
      <Head>
        <title>Manuel Puchner | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* fixid position stuff */}
      <Background />
      <SocialsSidebar />
      <Notification />

      {/* normal stuff */}
      <Layout>
        <About />
        <Work />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </Layout>
    </>
  );
}

export default Home;
