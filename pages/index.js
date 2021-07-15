import Layout from "../components/layout/layout.js";

import Background from "../components/background/Background.js";

import About from "../sections/about/About.js";
function Home() {
  return (
    <>
      <Background />
      <Layout>
        <About />
      </Layout>
    </>
  );
}

export default Home;
