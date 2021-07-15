import Layout from "../components/layout/layout.js";

import Background from "../components/background/Background.js";

import About from "../sections/about/About.js";

import Notification from "../components/notification/Notification.js";
function Home() {
  const isShown = true;
  return (
    <>
      <Background />
      <Layout>
        <About />
      </Layout>

      {isShown && <Notification />}
    </>
  );
}

export default Home;
